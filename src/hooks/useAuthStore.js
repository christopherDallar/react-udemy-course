import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { onChecking, onLogin } from '../store';

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

      dispatch(onLogin({ uid, token, name }));

      console.log({ resp });
    } catch (error) {
      console.log(error);
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
