import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { Text } from '@/shared/components/text';
import type { AuthCardProps } from './types';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';
import { Link } from 'react-router-dom';

export const AuthCard = ({
  authMode,
  toggleAuthMode,
  loginData,
  signUpData,
  handleAuthDataChange,
  handleSave,
  error,
}: AuthCardProps) => {
  return (
    <div className='flex w-full justify-center'>
      <Card
        bgColor='bg-black/10'
        padding='px-10 py-10'
        borderColor='border-gray-800'
        width='w-3/4'
        gap='gap-5'
        className='h-fit'
      >
        <div className='flex flex-col gap-1 select-none'>
          <Text
            text={'Mirë se u ktheve'}
            font='font-semibold font-serif'
            size='md:text-3xl text-2xl'
            className='text-white text-nowrap'
          />
          <div className='flex items-center gap-1'>
            <Text
              text={authMode === 'login' ? 'Nuk ke llogari?' : 'Ke llogari?'}
              size='text-sm'
              font='font-medium'
              className='text-gray-500'
            />

            <Text
              text={
                authMode === 'login' ? 'Regjistrohu tani' : 'Hyr në llogari'
              }
              size='text-sm'
              font='font-medium'
              className='text-teal2 cursor-pointer hover:scale-105 transition-all duration-200 will-change-transform'
              onClick={toggleAuthMode}
            />
          </div>
        </div>
        <div className='flex items-center w-full'>
          <div className='flex-1 h-[0.5px] bg-gray-500' />
          <span className='text-xs text-gray-500 uppercase font-medium'>
            Ose vazhdo me email
          </span>
          <div className='flex-1 h-[0.5px] bg-gray-500' />
        </div>

        {authMode === 'login' ? (
          <LoginForm
            loginData={loginData}
            handleAuthDataChange={handleAuthDataChange}
            error={error}
          />
        ) : (
          <SignUpForm
            signUpData={signUpData}
            handleAuthDataChange={handleAuthDataChange}
            error={error}
          />
        )}

        <div className='flex flex-col gap-2 items-end'>
          <Button
            name={
              authMode === 'login'
                ? 'Hyr në Trio Travel'
                : 'Regjistrohu në Trio Travel'
            }
            bgColor='#1a9aaa'
            bgHover='#4ecdc4'
            border='#1a9aaa'
            borderHover='#4ecdc4'
            color='black'
            hoverColor='black'
            fullWidth
            onClick={handleSave}
          />
          <Link to={'/'} className='text-xs underline font-medium text-teal'>
            HYR SI VIZITOR
          </Link>
        </div>

        <div className='flex flex-col gap-1 select-none items-center'>
          <Text
            text={'Duke hyrë, pranon të gjitha kushtet e përdorimit'}
            size='md:text-xs text-[10px]'
            className='text-gray-600 text-nowrap'
          />
          <div className='flex items-center gap-1'>
            <LockOutlinedIcon
              fontSize='inherit'
              className='text-gray-600'
              sx={{ fontSize: 11 }}
            />
            <Text
              text={'SSL i inkriptuar. Të dhënat e tua janë private'}
              size='md:text-xs text-[10px]'
              className='text-gray-600 text-nowrap'
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
