import { AuthCard } from './AuthCard';
import { AuthSidePanel } from './AuthSidePanel';
import { useAuthenticate } from './useAuthenticate';

export const AuthPage = () => {
  const {
    authMode,
    toggleAuthMode,
    loginData,
    signUpData,
    handleAuthDataChange,
    handleSave,
    error,
  } = useAuthenticate();
  return (
    <div className='auth-bg min-h-screen w-full flex'>
      <div className='container grid  md:grid-cols-2 w-full py-20'>
        <AuthSidePanel />
        <AuthCard
          authMode={authMode}
          toggleAuthMode={toggleAuthMode}
          handleAuthDataChange={handleAuthDataChange}
          loginData={loginData}
          signUpData={signUpData}
          handleSave={handleSave}
          error={error}
        />
      </div>
    </div>
  );
};
