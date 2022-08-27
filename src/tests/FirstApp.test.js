import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import FirstApp from './../components/FirstApp';
import { render } from '@testing-library/react';

describe('Test on FirstApp Component', () => {
  // test('should show "Hello, I am Goku" ', () => {
  //   const regard = 'Hello, I am Goku';

  //   const { getByText } = render(
  //     <FirstApp regard={'Hello, I am Goku'} />,
  //   );

  //   // wrapper.getByText()

  //   expect(getByText(regardPruebas sobre componentes de React)).toBeInTheDocument();
  // });

  // test('should show Firts App Correctly', () => {
  //   const regard = 'Hello, I am Goku';

  //   const wrapper = shallow(<FirstApp regard={regard} />);

  //   expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
  // });

  test('should show Firts App Correctly', () => {
    const regard = 'Hello, I am Goku';
    const subtitle = 'I am subtitle';

    const wrapper = shallow(
      <FirstApp regard={regard} subtitle={subtitle} />,
    );

    const textParagraph = wrapper.find('.subtitle').text();

    expect(textParagraph).toBe(subtitle);
  });

  // updated with render method
  test('has to math with snapshot', () => {
    const regard = 'Hello, I am Goku';
    const { container } = render(
      <FirstApp regard={regard} />,
    );

    expect(container).toMatchSnapshot();
  });

  test('must to show title on h1 tag', () => {
    const regard = 'Hello, I am Goku';
    const { container, getByText } = render(
      <FirstApp regard={regard} />,
    );
    expect(getByText(regard)).toBeTruthy(); // Valid if it is found

    const h1 = container.querySelector('h1');

    // expect(h1.innerHTML).toBe(regard); // Not ignore white space
    expect(h1.innerHTML).toContain(regard); // Ignore white space
  });
});
