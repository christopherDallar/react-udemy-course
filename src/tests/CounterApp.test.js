import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp';

describe('Test on FirstApp Component', () => {
  test('should Match With Snapshot CounterApp Correctly', () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
  });

  test('should show default value 100 CounterApp Correctly', () => {
    const value = 100;

    const wrapper = shallow(<CounterApp value={value} />);

    const textParagraph = wrapper.find('h2').text().trim();
    // console.log(`xxx${textParagraph}xxx`);

    expect(textParagraph).toBe(`${value}`); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
  });
});
