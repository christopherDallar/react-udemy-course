import { render, screen } from '@testing-library/react';
import { authStatusEnum } from '../../helpers';
import { useAuthStore } from '../../hooks/useAuthStore';
import { AppRouter } from '../../router/AppRouter';

jest.mock('../../hooks/useAuthStore');

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
});
