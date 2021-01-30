import { Route } from 'react-router-dom';

import { SignIn } from '~/pages';

const AuthRoutes = () => <Route path="/" exact component={SignIn} />;

export default AuthRoutes;
