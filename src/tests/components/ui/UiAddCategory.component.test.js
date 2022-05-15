import React from 'react';
import { shallow } from 'enzyme';
import { UiAddCategory } from './../../../shared/components/ui/UiAddCategory.component';

describe('Test on UiAddCategory Ui Component', () => {
	const setCategories = jest.fn();
	// let wrapper = shallow(<UiAddCategory setCategories={setCategories} />); // Just for get de autofill
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks(); // Clear simulates to every test
		wrapper = shallow(<UiAddCategory setCategories={setCategories} />);
	});

	test('should Match With Snapshot UiAddCategory Correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should change box text', () => {
		const input = wrapper.find('input');
		const value = 'Hello world';
		input.simulate('change', { target: { value } });
		expect(wrapper.find('h1').text().trim()).toBe(value);
	});

	test('should Not change box text', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});
});
