import { lazy } from 'react';

const InsuranceManagementPage = lazy(
  () => import('@features/admin/insuranceManagement'),
);

export default InsuranceManagementPage;
