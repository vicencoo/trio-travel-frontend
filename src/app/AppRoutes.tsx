import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/public/home";
import { Packages } from "../pages/public/packages";
import { Destinations } from "../pages/public/destinations";
import { PlaneTickets } from "../pages/public/planeTickets";
import { Properties } from "../pages/public/properties";
import { Contact } from "../pages/public/contact";
import { ViewProperty } from "../pages/public/viewProperty";
import { ViewPackage } from "../pages/public/viewPackage";
import { Suspense, useLayoutEffect } from "react";
import { setUpInterceptors } from "@/api/axios";
import { UserLayout } from "@/layout/UserLayout";
import { ProtectedRoute } from "@/guards/ProtectedRoute";
import { UserRole } from "@/types/user";
import { TurkeyPackages } from "@/pages/public/turkeyPackages";
import { ChristmasPackages } from "@/pages/public/christmasPackages";
import { NotFound } from "@/pages/public/notFound";
import { Spinner } from "@/components/spinner";
import { AuthPage } from "@/pages/auth/authPage/AuthPage";
import { AdminLayout } from "@/layout/AdminLayout";
import DashboardPage from "@/pages/admin/DashboardPage";
import BookingManagementPage from "@/pages/admin/BookingManagementPage";
import FlightCompaniesPage from "@/pages/admin/FlightCompaniesPage";
import CheckinServicePage from "@/pages/admin/CheckinServicePage";
import { PropertiesPage } from "@/pages/admin/propertiesPage";
import { PropertyManager } from "@/pages/admin/propertyManager";
import InsuranceManagementPage from "@/pages/admin/InsuranceManagementPage";
import InsuranceExpirationPage from "@/pages/admin/InsuranceExpirationPage";
import { PackageManager } from "@/pages/admin/packageManager";
import { PlaneTicketsPage } from "@/pages/admin/planeTicketsPage";
import { DestinationManager } from "@/pages/admin/destinationManager/DestinationManager";

const PageLoader = () => (
  <div className="flex w-full min-h-screen items-center justify-center">
    <Spinner />
  </div>
);

export const AppRoutes = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setUpInterceptors(navigate);
  }, [navigate]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Auth Routes */}
        <Route path="/authenticate" element={<AuthPage />} />

        {/* <Route
        element={<ProtectedRoute allowedRoles={['customer', 'admin', '']} />}
      > */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/paketa-turistike" element={<Packages />} />
          <Route path="/destinacionet" element={<Destinations />} />
          <Route path="/bileta-avioni" element={<PlaneTickets />} />
          <Route path="/pronat" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pronat/:slug" element={<ViewProperty />} />
          <Route path="/paketa-turistike/:slug" element={<ViewPackage />} />

          <Route path="/paketa-turistike-turqi" element={<TurkeyPackages />} />
          <Route
            path="/paketa-turistike-krishtlindje"
            element={<ChristmasPackages />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
        {/* </Route> */}

        <Route element={<ProtectedRoute allowedRoles={[UserRole.ADMIN]} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route
              path="/admin/work-management"
              element={<BookingManagementPage />}
            />
            <Route
              path="/admin/flight-companies"
              element={<FlightCompaniesPage />}
            />
            <Route
              path="/admin/check-in-service"
              element={<CheckinServicePage />}
            />
            <Route
              path="/admin/manage-properties"
              element={<PropertiesPage />}
            />
            <Route path="/admin/add-property" element={<PropertyManager />} />
            <Route
              path="/admin/editProperty/:id"
              element={<PropertyManager />}
            />
            <Route
              path="/admin/insurance-management"
              element={<InsuranceManagementPage />}
            />
            <Route
              path="/admin/insurance-expiration"
              element={<InsuranceExpirationPage />}
            />
            <Route path="/admin/manage-packages" element={<PackageManager />} />
            <Route path="/admin/plane-tickets" element={<PlaneTicketsPage />} />
            <Route
              path="/admin/manage-destinations"
              element={<DestinationManager />}
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
