import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { JournalApp } from './JournalApp';
import 'animate.css';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<JournalApp />
	</Provider>
);
// Removed the following line, because it was causing a problem with the Router Link:
// <React.StrictMode>
// </React.StrictMode>
