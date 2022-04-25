import React from 'react';
// import { GifGridItem } from './GifGridItem';
// import GifService from '../../core/services/gif/gif.service';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	// const [images, setImages] = useState([]);
	const { loading } = useFetchGifs();

	// useEffect(() => {
	// 	GifService.getGifs(category).then(setImages);
	// }, [category]);

	return (
		<>
			<h3>{category}</h3>
			{loading ? 'Loading...' : 'Data loaded'}
			{/* <div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div> */}
		</>
	);
};
