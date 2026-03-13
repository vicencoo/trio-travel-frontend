import { lazy } from 'react';

const InsuranceExpirationPage = lazy(
  () => import('@features/admin/insuranceExpiration'),
);

export default InsuranceExpirationPage;
