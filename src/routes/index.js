import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([

    // Dashboard Routes
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={'/myscrims'} replace />, index: true },
        { path: 'myscrims', element: <MyScrims /> },
      ],
    },

  ]);
}

// IMPORT COMPONENTS

const MyScrims = Loadable(lazy(() => import('../pages/dashboard/MyScrims')));
