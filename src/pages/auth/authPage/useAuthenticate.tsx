import { useAuth } from '@/context/authContext';
import { DEFAULT_LOGIN_DATA, DEFAULT_SIGN_UP_DATA } from '@/defaults/auth';
import { authServices } from '@/services/authServices';
import {
  type LoginFieldError,
  type SignupFieldError,
} from '@/types/errorTypes';
import { UserRole } from '@/types/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthenticate = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [loginData, setLoginData] =
    useState<LoginFieldError>(DEFAULT_LOGIN_DATA);
  const [signUpData, setSignUpData] =
    useState<SignupFieldError>(DEFAULT_SIGN_UP_DATA);
  const [error, setError] = useState<LoginFieldError | SignupFieldError>({});
  const navigate = useNavigate();
  const { getUser } = useAuth();

  const handleAuthDataChange = (
    formType: 'login' | 'register',
    key: string,
    value: string,
  ) => {
    if (formType === 'login') {
      setLoginData((prevData) => ({ ...prevData, [key]: value }));
    } else {
      setSignUpData((prevData) => ({ ...prevData, [key]: value }));
    }
  };

  const toggleAuthMode = () => {
    setAuthMode((prevMode) => (prevMode === 'login' ? 'register' : 'login'));
    setLoginData(DEFAULT_LOGIN_DATA);
    setSignUpData(DEFAULT_SIGN_UP_DATA);
  };

  const handleSave = async () => {
    try {
      const res =
        authMode === 'login'
          ? await authServices.login(loginData)
          : await authServices.signup(signUpData);
      if (res.data) {
        if (authMode === 'login') {
          localStorage.setItem('accessToken', res.data.accessToken);

          await getUser();
          const role = res.data.user.role;
          if (role === UserRole.ADMIN) {
            navigate('/admin/dashboard');
          } else {
            navigate('/');
          }
        } else if (authMode === 'register') {
          setAuthMode('login');
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      if (error?.response?.data?.errors) {
        const fieldErrors: Record<string, string> = {};
        error.response.data.errors.forEach(
          (e: { path: string | number; msg: string }) => {
            fieldErrors[e.path] = e.msg;
          },
        );
        setError(fieldErrors);
      }
    }
  };

  return {
    authMode,
    toggleAuthMode,
    loginData,
    signUpData,
    handleAuthDataChange,
    handleSave,
    error,
  };
};
