import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        {/* <Sidebar items={SIDEBAR_ITEMS} /> */}
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
