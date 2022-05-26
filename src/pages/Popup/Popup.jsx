import React from 'react';
import './Popup.css';

const onClickOnOff = () => {
  const startButton = document.getElementById('start-button');
  const context = startButton.textContent;
  if (context === 'START') {
    startButton.textContent = 'FINISH';
  } else {
    startButton.textContent = 'START';
  }
};

const Popup = () => {
  return (
    <>
      <div id="logo">BUBBLEing</div>
      <div id="line"></div>
      <div id="button-container">
        <button id="start-button" onClick={onClickOnOff}>
          FINISH
        </button>
        <button id="popup-my-list">MY LIST</button>
      </div>
    </>
  );
};

export default Popup;
