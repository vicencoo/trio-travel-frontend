import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { ScrollToTop } from '@/utils/scrollToTop';
import AuthProvider from '@/context/AuthProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};
