import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      // calendarApi
      const { data } = await calendarApi.post('/auth', {
        email,
        password,
      });

      const { uid, token, name } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ uid, name }));

      // console.log({ resp });
    } catch (error) {
      dispatch(onLogout('Wrong credentials'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth/new', {
        name,
        email,
        password,
      });

      console.log(data);

      // New login
      const { uid, token } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ uid, name: data.name }));
    } catch (error) {
      console.log(error);
      dispatch(onLogout(error.response.data?.msg || ''));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');

    if (!token) return dispatch(onLogout());

    try {
      const { data } = await calendarApi.get('auth/renew');
      console.log(data);

      // New login
      const { uid, token, name } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ uid, name }));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  return {
    //* Properties
    errorMessage,
    status,
    user,

    //* Methods
    startLogin,
    startRegister,
    checkAuthToken,
  };
};
