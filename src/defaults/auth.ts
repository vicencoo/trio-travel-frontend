import type { LoginFieldError, SignupFieldError } from '@/types/errorTypes';

export const DEFAULT_SIGN_UP_DATA: SignupFieldError = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const DEFAULT_LOGIN_DATA: LoginFieldError = {
  email: '',
  password: '',
};
