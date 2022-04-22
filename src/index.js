import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './components/CounterApp';
import './index.css';
import FirstApp from './components/FirstApp';
const divRoot = document.querySelector('#root');

ReactDOM.render(
  <FirstApp regard={'Hello, I am Goku'} />,
  divRoot,
);
// ReactDOM.render(<CounterApp value={123} />, divRoot);
