import ServiceGif from './../../core/services/gif/Gif.service';

describe('Test on ServiceGif.getGifs', () => {
	test('should get 10 elements', async () => {
		const gifs = await ServiceGif.getGifs('One Punch');

		expect(gifs.length).toBe(10);
	});

	test('If category string is empty', async () => {
		const gifs = await ServiceGif.getGifs('');

		expect(gifs.length).toBe(0);
	});
});
