import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from '../pages/public/home';
import { Packages } from '../pages/public/packages';
import { Destinations } from '../pages/public/destinations';
import { PlaneTickets } from '../pages/public/planeTickets';
import { Properties } from '../pages/public/properties';
import { Contact } from '../pages/public/contact';
import { PropertyManager } from '../pages/admin/propertyManager';
import { PropertiesPage } from '../pages/admin/propertiesPage';
import { ViewProperty } from '../pages/public/viewProperty';
import { PlaneTicketsPage } from '../pages/admin/planeTicketsPage';
import { PackageManager } from '../pages/admin/packageManager';
import { ViewPackage } from '../pages/public/viewPackage';
import { DestinationManager } from '../pages/admin/destinationManager/DestinationManager';
import { AuthPage } from '@/pages/auth/authPage/AuthPage';
import { useLayoutEffect } from 'react';
import { setUpInterceptors } from '@/api/axios';
import { ProtectedRoute } from '@/shared/guards/ProtectedRoute';
import { AdminLayout } from '@/layout/AdminLayout';
import { UserLayout } from '@/layout/UserLayout';
import DashboardPage from '@/pages/admin/DashboardPage';
import BookingManagementPage from '@/pages/admin/BookingManagementPage';
import CheckinServicePage from '@/pages/admin/CheckinServicePage';
import InsuranceManagementPage from '@/pages/admin/InsuranceManagementPage';
import InsuranceExpirationPage from '@/pages/admin/InsuranceExpirationPage';

export const AppRoutes = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setUpInterceptors(navigate);
  }, [navigate]);

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path='/authenticate' element={<AuthPage />} />

      {/* <Route
        element={<ProtectedRoute allowedRoles={['customer', 'admin', '']} />}
      > */}
      <Route element={<UserLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/planeTickets' element={<PlaneTickets />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/properties/view-property/:id'
          element={<ViewProperty />}
        />
        <Route path='/packages/view-package/:id' element={<ViewPackage />} />
      </Route>
      {/* </Route> */}

      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<DashboardPage />} />
          <Route
            path='/admin/work-management'
            element={<BookingManagementPage />}
          />
          <Route
            path='/admin/check-in-service'
            element={<CheckinServicePage />}
          />
          <Route path='/admin/manage-properties' element={<PropertiesPage />} />
          <Route path='/admin/add-property' element={<PropertyManager />} />
          <Route path='/admin/editProperty/:id' element={<PropertyManager />} />
          <Route
            path='/admin/insurance-management'
            element={<InsuranceManagementPage />}
          />
          <Route
            path='admin/insurance-expiration'
            element={<InsuranceExpirationPage />}
          />
          <Route path='/admin/manage-packages' element={<PackageManager />} />
          <Route path='/admin/plane-tickets' element={<PlaneTicketsPage />} />
          <Route
            path='/admin/manage-destinations'
            element={<DestinationManager />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
