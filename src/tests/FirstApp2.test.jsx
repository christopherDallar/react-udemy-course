import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import FirstApp from '../components/FirstApp';
import {
  getAllByText,
  render,
  screen,
} from '@testing-library/react';

describe('Test on FirstApp Component', () => {
  const regard = 'Hello, I am Goku';
  const subtitle = 'I am a subtitle';

  test('must to match with snapshot', () => {
    const { container } = render(
      <FirstApp regard={regard} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('must to show Hello, I am Goku message', () => {
    render(<FirstApp regard={regard} />);

    // screen.debug()
    expect(screen.getByText(regard)).toBeTruthy();
  });

  test('must to show title on h1', () => {
    render(<FirstApp regard={regard} />);

    expect(
      screen.getByRole('heading', { level: 1 }).innerHTML,
    ).toContain(regard);
  });

  test('must to show subtitle passed by props', () => {
    render(
      <FirstApp regard={regard} subtitle={subtitle} />,
    );

    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
