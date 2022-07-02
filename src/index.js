import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
// import { PokemonApp } from './PokemonApp';
import { TodoApp } from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App /> */}
			{/* <PokemonApp /> */}
			<TodoApp />
		</Provider>
	</React.StrictMode>
);
