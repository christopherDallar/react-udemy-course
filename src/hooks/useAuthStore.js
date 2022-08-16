import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });
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

      console.log({ resp });
    } catch (error) {
      dispatch(onLogout('Wrong credentials'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    //* Properties
    errorMessage,
    status,
    user,

    //* Methods
    startLogin,
  };
};
