import React from 'react';

import { RouterProps, Route, Redirect } from 'react-router-dom';

interface CustonRouteProps extends RouterProps {
  isPrivate?: boolean;
}

const CustonRoute: React.FC<CustonRouteProps> = ({ isPrivate, ...rest }) => {
  return isPrivate ? <Redirect to="/" exact /> : <Route {...rest} />;
};

export default CustonRoute;
