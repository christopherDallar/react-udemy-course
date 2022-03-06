import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './components/FirstApp';
import './index.css';
const divRoot = document.querySelector('#root');

ReactDOM.render(
  <FirstApp regard="Hello i am Christopher" />,
  divRoot,
);
