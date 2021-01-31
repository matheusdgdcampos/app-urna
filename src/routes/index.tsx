import { BrowserRouter, Switch } from 'react-router-dom';

import { useAuth } from '~/hooks/auth';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>{!user ? <AuthRoutes /> : <AppRoutes />}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
