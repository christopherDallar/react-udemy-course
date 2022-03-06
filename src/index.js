import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import './index.css';
const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={123} />, divRoot);
