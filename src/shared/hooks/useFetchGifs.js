import { useState, useEffect } from 'react';
import GifService from './../../core/services/gif/gif.service';

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		GifService.getGifs(category).then((imgs) =>
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			}, 3000)
		);
	}, [category]);

	return state; // { data: [], loading: true }
};
