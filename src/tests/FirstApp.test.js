import React from 'react';
import { render } from '@testing-library/react';
import FirstApp from '../components/FirstApp';

describe('Test on FirstApp Component', () => {
  test('should show "Hello, I am Goku" ', () => {
    const regard = 'Hello, I am Goku';

    const { getByText } = render(
      <FirstApp regard={'Hello, I am Goku'} />,
    );

    // wrapper.getByText()

    expect(getByText(regardPruebas sobre componentes de React)).toBeInTheDocument();
  });
});
