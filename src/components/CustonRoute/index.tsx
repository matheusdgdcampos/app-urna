import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '~/hooks/auth';

interface CustonRouteProps extends RouteProps {
  isPrivate?: boolean;
}

const CustonRoute: React.FC<CustonRouteProps> = ({ isPrivate, ...rest }) => {
  const { user } = useAuth();

  return isPrivate && user ? <Route {...rest} /> : <Redirect to="/" exact />;
};

export default CustonRoute;
