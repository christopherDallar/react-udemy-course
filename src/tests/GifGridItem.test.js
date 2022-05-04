import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { GifGridItem } from './../shared/components/gif/GifGridItem.component';

describe('Test on GiftGridItem Component', () => {
	const title = 'Un titulo';
	const url = 'https://localhost/';

	let wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('should Match With Snapshot GiftGridItem Correctly', () => {
		expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
	});
});
