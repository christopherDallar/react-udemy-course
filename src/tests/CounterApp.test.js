import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp';

describe('Test on FirstApp Component', () => {
  // let wrapper = shallow(<CounterApp />); // If you want the intellisense
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('should Match With Snapshot CounterApp Correctly', () => {
    expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
  });

  test('should show default value 100 CounterApp Correctly', () => {
    const value = 100;

    const wrapper = shallow(<CounterApp value={value} />);

    const counterValue = wrapper.find('h2').text().trim();
    // console.log(`xxx${counterValue}xxx`);

    expect(counterValue).toBe(`${value}`);
  });

  test('should increment value from 10 to 11 with +1 button', () => {
    wrapper.find('button').at(0).simulate('click');
    // console.log(btn1.html());
    const counterValue = wrapper.find('h2').text().trim();

    expect(counterValue).toBe('11');
  });

  test('should decrement value from 11 to 10 with -1 button', () => {
    wrapper.find('button').at(2).simulate('click');
    // console.log(btn1.html());
    const counterValue = wrapper.find('h2').text().trim();

    expect(counterValue).toBe('9');
  });
});
