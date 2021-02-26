import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CustonRoute, HeaderAdmin, HeaderSignIn } from '~/components';
import { useAuth } from '~/hooks/auth';

import { SignIn, Voto } from '../pages';

const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!user && (
          <HeaderSignIn>
            <Route path="/" exact component={SignIn} />
          </HeaderSignIn>
        )}
        {user?.tipo === 'standard' ? (
          <HeaderSignIn>
            <CustonRoute role={user.tipo} path="/dashboard" component={Voto} />
          </HeaderSignIn>
        ) : (
          <HeaderAdmin>
            <CustonRoute
              role={user?.tipo ?? 'admin'}
              path="/dashboard"
              component={Voto}
            />
          </HeaderAdmin>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
