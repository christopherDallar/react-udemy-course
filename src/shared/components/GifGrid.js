import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import GifService from './../../core/services/gif/Gif.service';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		// const getGifs = async () => {
		// 	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		// 		category
		// 	)}&limit=10&api_key=4PcTaskj1GEQj0JDFKX59fsQ6RKYDlUH`;
		// 	const resp = await fetch(url);
		// 	const { data } = await resp.json();

		// 	const gifs = data.map((img) => {
		// 		return {
		// 			id: img.id,
		// 			title: img.title,
		// 			url: img.images.downsized_medium.url,
		// 		};
		// 	});

		// 	setImages(gifs);
		// };

		GifService.getGifs(category, setImages);
	}, [category]);

	return (
		<>
			<h3>{category}</h3>
			<div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
