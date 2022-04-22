import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import FirstApp from './../components/FirstApp';

describe('Test on FirstApp Component', () => {
  // test('should show "Hello, I am Goku" ', () => {
  //   const regard = 'Hello, I am Goku';

  //   const { getByText } = render(
  //     <FirstApp regard={'Hello, I am Goku'} />,
  //   );

  //   // wrapper.getByText()

  //   expect(getByText(regardPruebas sobre componentes de React)).toBeInTheDocument();
  // });

  test('should show Firts App Correctly', () => {
    const regard = 'Hello, I am Goku';

    const wrapper = shallow(<FirstApp regard={regard} />);

    expect(wrapper).toMatchSnapshot(); // To Save the literal rendered component and compare with wrapper if you press 'u' update the snapshot
  });
});
