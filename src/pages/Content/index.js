import React from 'react';
import ReactDOM from 'react-dom';
import Detection from './detection';
import './content.styles.css';

document.body.style.overflowX = 'hidden';

function renderContent() {
  const Element = document.createElement('div');
  Element.setAttribute('id', 'app-content');
  document.body.appendChild(Element);

  ReactDOM.render(<Detection />, document.getElementById('app-content'));
}

renderContent();
