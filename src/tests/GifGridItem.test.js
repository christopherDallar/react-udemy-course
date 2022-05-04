import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { GifGridItem } from './../shared/components/gif/GifGridItem.component';

describe('Test on GiftGridItem Component', () => {
	const title = 'Un titulo';
	const url = 'https://localhost/';

	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('should Match With Snapshot GiftGridItem Correctly', () => {
		expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
	});

	test(`should has the same ${title} in tag <p> `, () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('should has the same src and alt of <img>', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('should has class in <div> the className  animate__bounce', () => {
		const div = wrapper.find('div');
		const className = 'animate__bounce';
		expect(div.hasClass(className)).toBe(true);
	});
});
