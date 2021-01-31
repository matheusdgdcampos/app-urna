import { CustonRoute } from '~/components';
import { Voto } from '~/pages';

const AppRoutes = () => {
  return (
    <>
      <CustonRoute path="/voto" isPrivate component={Voto} />
    </>
  );
};

export default AppRoutes;
