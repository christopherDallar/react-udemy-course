import React from 'react';
import { shallow } from 'enzyme';
import { UiAddCategory } from './../../../shared/components/ui/UiAddCategory.component';
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

describe('Test on UiAddCategory Ui Component', () => {
  const onNewCategory = jest.fn();
  // let wrapper = shallow(<UiAddCategory setCategories={setCategories} />); // Just for get de autofill
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks(); // Clear simulates to every test
    wrapper = shallow(
      <UiAddCategory onNewCategory={onNewCategory} />,
    );
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
    wrapper
      .find('form')
      .simulate('submit', { preventDefault() {} });

    expect(onNewCategory).not.toHaveBeenCalled();
  });

  // After update Fernando herrare
  test('must to call onNewCategory if input has a value', () => {
    const inputValue = 'Saitama';

    render(<UiAddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('myForm'); // i don't know why it's not finding form element without modify directly form with role='myForm' attribute

    // Fire change input dom element target value change to inputValue
    fireEvent.input(input, {
      target: { value: inputValue },
    });
    fireEvent.submit(form);

    expect(input.value).toBe(''); // after submit input have to be empty

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('must not be call onNewCategory if input is empty', () => {
    render(<UiAddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('myForm'); // i don't know why it's not finding form element without modify directly form with role='myForm' attribute

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    // expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
});
