import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock } from 'react-icons/fi';

import { HeaderSignIn, Input } from '~/components';

import {
  Container,
  LoginContainer,
  LoginContainer_Title,
  LoginContainer_Label,
  LoginContainer_ButtonSugmitContainer,
  ButtonSubmitContainer_ButtonSignIn,
} from './styles';

interface SignInFormData {
  codigo: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <HeaderSignIn />

      <LoginContainer>
        <LoginContainer_Title>Login</LoginContainer_Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <LoginContainer_Label>Digite seu ID:</LoginContainer_Label>
          <Input
            icon={FiLock}
            extraStyles={{
              marginTop: '1.9rem',
            }}
            name="code"
          />
          <LoginContainer_ButtonSugmitContainer>
            <ButtonSubmitContainer_ButtonSignIn type="submit">
              Entrar
            </ButtonSubmitContainer_ButtonSignIn>
          </LoginContainer_ButtonSugmitContainer>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default SignIn;
