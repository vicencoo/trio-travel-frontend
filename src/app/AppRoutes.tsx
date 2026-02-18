import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/public/home';
import { Packages } from '../pages/public/packages';
import { Destinations } from '../pages/public/destinations';
import { PlaneTickets } from '../pages/public/planeTickets';
import { Hotel } from '../pages/public/hotel';
import { Properties } from '../pages/public/properties';
import { Contact } from '../pages/public/contact';
import { PropertyManager } from '../pages/admin/propertyManager';
import { PropertiesPage } from '../pages/admin/propertiesPage';
import { ViewProperty } from '../pages/public/viewProperty';
import { PlaneTicketsPage } from '../pages/admin/planeTicketsPage';
import { PackageManager } from '../pages/admin/packageManager';
import { ViewPackage } from '../pages/public/viewPackage';
import { HotelManager } from '../pages/admin/hotelManager';
import { ViewHotel } from '../pages/public/viewHotel';
import { DestinationManager } from '../pages/admin/destinationManager/DestinationManager';
import { Login } from '../pages/auth/login';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path='/admin/login' element={<Login />} />
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/planeTickets' element={<PlaneTickets />} />
        <Route path='/hotels' element={<Hotel />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/properties/view-property/:id'
          element={<ViewProperty />}
        />
        <Route path='/packages/view-package/:id' element={<ViewPackage />} />
        <Route path='/hotels/view-hotel/:id' element={<ViewHotel />} />

        {/* Admin Routes */}
        <Route path='/admin/manage-properties' element={<PropertiesPage />} />
        <Route path='/admin/add-property' element={<PropertyManager />} />
        <Route path='/admin/editProperty/:id' element={<PropertyManager />} />
        <Route path='/admin/plane-tickets' element={<PlaneTicketsPage />} />
        <Route path='/admin/manage-packages' element={<PackageManager />} />
        <Route path='/admin/manage-hotels' element={<HotelManager />} />
        <Route
          path='/admin/manage-destinations'
          element={<DestinationManager />}
        />
      </Route>
    </Routes>
  );
};
