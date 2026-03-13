import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const UserLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
