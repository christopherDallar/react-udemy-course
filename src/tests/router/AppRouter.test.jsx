import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { authStatusEnum } from '../../helpers';
import { useAuthStore } from '../../hooks/useAuthStore';
import { AppRouter } from '../../router/AppRouter';
import { store } from '../../store';

jest.mock('../../hooks/useAuthStore');

jest.mock('../../calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>,
}));

describe('Testing AppRouter.jsx', () => {
  const mockCheckAuthToken = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should checkAuthToken have been called', () => {
    useAuthStore.mockReturnValue({
      status: authStatusEnum.checking,
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('should to show login when is not authenticated', () => {
    useAuthStore.mockReturnValue({
      status: authStatusEnum.notAuthenticated,
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth2/some/some']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText('Ingreso')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('should to show calendar when is authenticated', () => {
    useAuthStore.mockReturnValue({
      status: authStatusEnum.authenticated,
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter initialEntries={['/auth2/some/some']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText('CalendarPage')).toBeTruthy();
  });
});
