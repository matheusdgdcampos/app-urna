import { ImageLogo } from '~/assets/images';

import { Container, Title } from './styles';

const HeaderSignIn = () => {
  return (
    <Container>
      <img src={ImageLogo} alt="logo" />
      <Title>Senac</Title>
    </Container>
  );
};

export default HeaderSignIn;
