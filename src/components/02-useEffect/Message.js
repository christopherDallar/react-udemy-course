import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [{ x, y }, setcoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const mouseMove = (e) => {
			const coords = { x: e.x, y: e.y };

			setcoords(coords);
			console.log(' :D ');
		};

		window.addEventListener('mousemove', mouseMove);

		console.log('componente montado');

		return () => {
			console.log('componente desmontado');
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<>
			<h3>Eres genial</h3>
			<p>
				x:{x} y y:{y}
			</p>
		</>
	);
};
