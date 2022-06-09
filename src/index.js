import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournalApp } from './JournalApp';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JournalApp />);
// Removed the following line, because it was causing a problem with the Router Link:
// <React.StrictMode>
// </React.StrictMode>
