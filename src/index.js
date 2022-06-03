import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css';
import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HeroesApp />
	</React.StrictMode>
);
