import { axios } from '@/api';
import {
  createContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types/types';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<{
  user: User | null;
  handleLogout: () => Promise<void>;
  getUser: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
} | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const isAuthenticated = !!user?.id;

  const getUser = async () => {
    try {
      const res = await axios('/get-user');
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.post('/logout');
      if (res.data) {
        navigate('/authenticate');
        localStorage.removeItem('accessToken');
        setUser(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogout, isLoading, isAuthenticated, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
