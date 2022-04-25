const apiUrl = 'https://api.giphy.com/v1/gifs';
const apiKey = '4PcTaskj1GEQj0JDFKX59fsQ6RKYDlUH';

const getGifs = async (category, setState) => {
	const url = `${apiUrl}/search?q=${encodeURI(
		category
	)}&limit=10&api_key=${apiKey}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

	return gifs;
};

const GifService = {
	getGifs,
};

export default GifService;
