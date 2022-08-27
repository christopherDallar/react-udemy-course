import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import { ViewGiftExpert } from './views/GiftExpert.view';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <ViewGiftExpert />
  </React.StrictMode>,
);
