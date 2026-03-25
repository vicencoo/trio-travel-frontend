import { axios } from '@/api';
import type { LoginFieldError, SignupFieldError } from '@/types/errorTypes';

export const authServices = {
  login: (loginData: LoginFieldError) =>
    axios.post('/authenticate/login', loginData),

  signup: (signUpData: SignupFieldError) =>
    axios.post('/authenticate/signup', signUpData),

  getUser: () => axios('/get-user'),

  logout: () => axios.post('/logout'),
};
