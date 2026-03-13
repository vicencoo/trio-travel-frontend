import { lazy } from 'react';

const BookingManagementPage = lazy(
  () => import('@features/admin/bookingManagement'),
);

export default BookingManagementPage;
