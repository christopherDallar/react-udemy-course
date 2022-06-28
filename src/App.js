import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment } from './store/slices/counter';

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />

				<p>
					<button
						type='button'
						onClick={() => {
							dispatch(increment());
						}}
					>
						Count is: {counter}
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
