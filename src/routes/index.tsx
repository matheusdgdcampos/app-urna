import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoutes from './AuthRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoutes />
    </Switch>
  </BrowserRouter>
);

export default Routes;
