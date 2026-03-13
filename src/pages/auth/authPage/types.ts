import type {
  LoginFieldError,
  SignupFieldError,
} from '@/shared/types/errorTypes';

type LoginData = {
  email?: string;
  password?: string;
};

type SignupData = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type AuthCardProps = {
  authMode: 'login' | 'register';
  toggleAuthMode: () => void;
  handleAuthDataChange: (
    formType: 'login' | 'register',
    key: string,
    value: string,
  ) => void;
  loginData: LoginData;
  signUpData: SignupData;
  handleSave: () => void;
  error: LoginFieldError | SignupFieldError;
};

export type LoginDataProps = {
  loginData: LoginData;
  handleAuthDataChange: (
    formType: 'login' | 'register',
    key: string,
    value: string,
  ) => void;
  error: LoginFieldError;
};

export type SignUpDataProps = {
  signUpData: SignupData;
  handleAuthDataChange: (
    formType: 'login' | 'register',
    key: string,
    value: string,
  ) => void;
  error: SignupFieldError;
};
