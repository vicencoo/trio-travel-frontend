import { Input } from '@/components/input';
import type { SignUpDataProps } from './types';

export const SignUpForm = ({
  signUpData,
  handleAuthDataChange,
  error,
}: SignUpDataProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <Input
        label='Emri Juaj'
        labelColor='text-gray-500'
        value={signUpData.username}
        onChange={(e) =>
          handleAuthDataChange('register', 'username', e.target.value)
        }
        errorMessage={error.username}
      />
      <Input
        label='Email'
        labelColor='text-gray-500'
        value={signUpData.email}
        onChange={(e) =>
          handleAuthDataChange('register', 'email', e.target.value)
        }
        errorMessage={error.email}
      />
      <Input
        label='Password'
        labelColor='text-gray-500'
        isPassword
        value={signUpData.password}
        onChange={(e) =>
          handleAuthDataChange('register', 'password', e.target.value)
        }
        errorMessage={error.password}
      />
      <Input
        label='Confirm Password'
        labelColor='text-gray-500'
        isPassword
        value={signUpData.confirmPassword}
        onChange={(e) =>
          handleAuthDataChange('register', 'confirmPassword', e.target.value)
        }
        errorMessage={error.confirmPassword}
      />
    </div>
  );
};
