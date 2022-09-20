import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import calendarApi from '../../api/calendarApi';
import { useAuthStore } from '../../hooks/useAuthStore';
import { authSlice } from '../../store';
import { initialState, notAuthenticatedState } from '../fixures/authStates';
import { testUserCredentials } from '../fixures/testUser';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState },
    },
  });
};

describe('Testing useAuthStore.js', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should to return default values', () => {
    const mockStore = getMockStore({ ...initialState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      errorMessage: undefined,
      status: 'checking',
      user: {},
      startLogin: expect.any(Function),
      startRegister: expect.any(Function),
      checkAuthToken: expect.any(Function),
      startLogout: expect.any(Function),
    });
  });

  // startLogin
  test('should startLogin do login well', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startLogin(testUserCredentials);
    });

    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { uid: '6327aed253e2fc83741aa5b7', name: 'Test user' },
    });

    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));
  });

  test('should startLogin do login wrong', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startLogin({
        email: 'lsadsad@gf.com',
        password: '123456',
      });
    });

    const { errorMessage, status, user } = result.current;

    expect(localStorage.getItem('token')).toBe(null);
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: expect.any(String),
      status: 'not-authenticated',
      user: {},
    });

    await waitFor(() => expect(result.current.errorMessage).toBe(undefined));
  });

  // startRegister
  test('should startRegister do login well', async () => {
    const newUser = {
      email: 'test2@gmail.com',
      name: 'test user 2',
      password: '123456',
    };

    const mockStore = getMockStore({ ...initialState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: {
        ok: true,
        uid: 'abc123',
        name: 'test user',
        token: 'bearer abc 123',
      },
    });

    await act(async () => {
      await result.current.startRegister(newUser);
    });

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { uid: 'abc123', name: 'test user' },
    });

    spy.mockRestore();
  });

  test('should startRegister fail create user', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startRegister(testUserCredentials);
    });

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: 'Account already exist with that email',
      status: 'not-authenticated',
      user: {},
    });

    await waitFor(() => expect(result.current.errorMessage).toBe(undefined));
  });

  test('should checkAuthToken must to fail if there is not token', async () => {
    const mockStore = getMockStore({ ...initialState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.checkAuthToken(testUserCredentials);
    });

    const { status, user, errorMessage } = result.current;
    // expect(localStorage.getItem('token')).toBe(null);
    expect({ status, user, errorMessage }).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    });
  });

  test('should checkAuthToken must to authenticate user if there is token', async () => {
    const { data } = await calendarApi.post('/auth', testUserCredentials);
    localStorage.setItem('token', data.token);

    const mockStore = getMockStore({ ...initialState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      // await result.current.startLogin(testUserCredentials);
      await result.current.checkAuthToken(testUserCredentials);
    });

    const { status, user, errorMessage } = result.current;
    console.log({ status, user, errorMessage });

    // expect(localStorage.getItem('token')).toBe(String);
    expect({ status, user, errorMessage }).toEqual({
      status: 'authenticated',
      user: { uid: '6327aed253e2fc83741aa5b7', name: 'Test user' },
      errorMessage: undefined,
    });
  });
});
