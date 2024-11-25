import { getAuth } from 'firebase/auth';
import { Navigate, Outlet } from 'react-router';

interface PropProtectedRouter {}

export default function ProtectedRouter({}: PropProtectedRouter) {
  const auth = getAuth().currentUser;

  if (!auth) return <Navigate to={'/login'} />;

  return <Outlet />;
}
