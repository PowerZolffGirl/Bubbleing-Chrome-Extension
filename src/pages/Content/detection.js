import React from 'react';
import './content.styles.css';
import { showMenuBar } from './openMenu';
import * as tf from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs-converter';
import classesDir from './food';
//tf.setBackend('webgl');

const threshold = 0.53;

async function load_model() {
  const model = await loadGraphModel(
    'https://raw.githubusercontent.com/PowerZolffGirl/Bubbling-Start/main/Material/OD/220505_TFJS/model.json'
  );
  return model;
}

async function get_video() {
  const video = document.getElementsByTagName('video')[0];
  return video;
}

class Detection extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();
  componentDidMount() {
    const video = document.getElementsByTagName('video')[0];
    const cont = video.parentElement;
    if (video) {
      let canvas = document.createElement('canvas');
      canvas.setAttribute('id', 'video-canvas');
      if (video.length !== 0) {
        canvas.height = 3000;
        canvas.width = 3000;
      } else {
        canvas.height = 600;
        canvas.width = 600;
      }
      setCanvasStyle(canvas, video);
      cont.appendChild(canvas);
    }

    function setCanvasStyle(tmpCanvas, video) {
      tmpCanvas.style.position = 'absolute';
      tmpCanvas.style.top = '0px';
      tmpCanvas.style.right = '0px';
      tmpCanvas.style.left = video.style.cssText.split('; ')[2].split(': ')[1];
      tmpCanvas.style.bottom = '0px';
      tmpCanvas.style.height = video.clientHeight;
      tmpCanvas.style.width = video.clientWidth;
    }

    const videoPromise = get_video();
    const modelPromise = load_model();

    if (videoPromise) {
      console.log('video ready');
      this.videoRef.current = video;
    }
    if (modelPromise) console.log('model ready');

    Promise.all([modelPromise, videoPromise])
      .then((values) => {
        console.log('model video ready');
        this.detectFrame(video, values[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  detectFrame = (video, model) => {
    tf.engine().startScope();
    if (video.readyState === 4) {
      model.executeAsync(this.process_input(video)).then((predictions) => {
        this.renderPredictions(predictions, video);
        requestAnimationFrame(() => {
          this.detectFrame(video, model);
        });
      });
    } else {
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    }
    tf.engine().endScope();
  };
  process_input(video_frame) {
    // console.log('detecting...');
    if (video_frame.readyState !== 4) {
      return;
    }
    const tfimg = tf.browser.fromPixels(video_frame).toInt();
    const expandedimg = tfimg.transpose([0, 1, 2]).expandDims();
    return expandedimg;
  }
  buildDetectedObjects(scores, threshold, boxes, classes, classesDir) {
    const detectionObjects = [];
    var video_frame = document.getElementsByTagName('video')[0];

    scores[0].forEach((score, i) => {
      if (score > threshold) {
        const bbox = [];
        const minY = boxes[0][i][0] * video_frame.offsetHeight;
        const minX = boxes[0][i][1] * video_frame.offsetWidth;
        const maxY = boxes[0][i][2] * video_frame.offsetHeight;
        const maxX = boxes[0][i][3] * video_frame.offsetWidth;

        bbox[0] = minX;
        bbox[1] = minY;
        bbox[2] = maxX - minX;
        bbox[3] = maxY - minY;
        console.log(classesDir[classes[i]].name);

        detectionObjects.push({
          class: classes[i],
          label: classesDir[classes[i]].name,
          score: score.toFixed(4),
          bbox: bbox,
        });
      }
    });
    return detectionObjects;
  }

  renderPredictions = (predictions) => {
    const canvas = document.getElementById('video-canvas');
    const video = document.getElementsByTagName('video')[0];
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const font = '8px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top';

    const boxes = predictions[2].arraySync();
    const scores = predictions[3].arraySync();
    const classes = predictions[6].dataSync();
    const detections = this.buildDetectedObjects(
      scores,
      threshold,
      boxes,
      classes,
      classesDir
    );

    detections.forEach((item) => {
      const x = item['bbox'][0];
      const y = item['bbox'][1];
      const width = item['bbox'][2];
      const height = item['bbox'][3];
      canvas.onclick = (e) => {
        clicked(e);
      };

      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 4;
      //ctx.strokeRect(x, y, width, height);

      const base_image = new Image();
      base_image.src = chrome.runtime.getURL('images/default_icon.png');

      base_image.onload = function () {
        ctx.drawImage(base_image, x + width / 2, y + height / 2, 25, 25);
      };

      function clicked(e) {
        e.preventDefault();
        var eventX = e.clientX;
        var eventY = e.clientY;
        if (
          eventX > x + width / 2 - 100 &&
          eventX < x + width / 2 + 100 &&
          eventY > y + height / 2 - 100 &&
          eventY < y + height / 2 + 100
        ) {
          showMenuBar(item['class'], item['label']);
          if (!video.paused) {
            video.pause();
          } else {
            video.play();
          }
        }
      }
      // Draw the label background.
      ctx.fillStyle = '#00FFFF';
      const textWidth = ctx.measureText(
        item['label'] + ' ' + (100 * item['score']).toFixed(2) + '%'
      ).width;
      const textHeight = parseInt(font, 10); // base 10
      //ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    detections.forEach((item) => {
      const x = item['bbox'][0];
      const y = item['bbox'][1];

      ctx.fillStyle = '#000000';
      /*
      ctx.fillText(
        item['label'] + ' ' + (100 * item['score']).toFixed(2) + '%',
        x,
        y
      );
      */
    });
  };
  render() {
    return <></>;
  }
}

export default Detection;
