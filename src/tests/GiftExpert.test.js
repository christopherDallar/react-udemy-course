import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { ViewGiftExpert } from './../views/GiftExpert.view';

describe('Test on GiftExpert Component', () => {
	let wrapper = shallow(<ViewGiftExpert />);

	test('should Match With Snapshot GiftExpert Correctly', () => {
		expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
	});
});
