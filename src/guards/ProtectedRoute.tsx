import { Spinner } from '@/components/spinner';
import { useAuth } from '@/context/authContext';
import { UserRole } from '@/types/user';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
  allowedRoles,
}: {
  allowedRoles: string[];
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className='flex w-full h-screen items-center justify-center'>
        <Spinner />
      </div>
    );
  if (!isAuthenticated) return <Navigate to='/authenticate' replace />;

  // Admin can access everything
  if (user?.role === UserRole.ADMIN) return <Outlet />;

  // Regular user - check if their role is allowed for this route group
  if (!allowedRoles.includes(user?.role ?? '')) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};
