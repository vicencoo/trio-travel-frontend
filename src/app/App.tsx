import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { ScrollToTop } from '@/utils/scrollToTop';

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};
