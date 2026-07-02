import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const UserLayout = () => {
  useEffect(() => {
    document.documentElement.classList.add('public-scroll');

    return () => {
      document.documentElement.classList.remove('public-scroll');
    };
  }, []);

  return (
    <div className='public-layout flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        <main className='public-page-content flex-1'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
