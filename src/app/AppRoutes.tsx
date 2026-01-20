import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/public/home';
import { Packages } from '../pages/public/packages';
import { Destinations } from '../pages/public/destinations';
import { PlaneTickets } from '../pages/public/planeTickets';
import { Hotel } from '../pages/public/hotel';
import { Property } from '../pages/public/property';
import { Contact } from '../pages/public/contact';
import { AddProperty } from '../pages/admin/addProperty';
import { ManageProperty } from '../pages/admin/manageProperty';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/planeTickets' element={<PlaneTickets />} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/property' element={<Property />} />
        <Route path='/contact' element={<Contact />} />

        {/* Admin Routes */}
        <Route path='/admin-addProperty' element={<AddProperty />} />
        <Route path='/admin-manageProperty' element={<ManageProperty />} />
      </Route>
    </Routes>
  );
};
