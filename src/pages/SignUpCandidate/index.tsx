import { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { FaUserTie } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

import { Button, Input, Dropzone as DropzoneComponent } from '~/components';

import {
  Container,
  RegisterContainer,
  AvatarContainer,
  Dropzone,
  FormContainer,
  TitleRegister,
  CustomForm,
} from './styles';

const SignUpCandidate = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <RegisterContainer>
        <AvatarContainer>
          <Dropzone>
            <DropzoneComponent fileUpload={setSelectedFile} />
          </Dropzone>

          <Button
            maxHeight="59px"
            maxWidth="223px"
            type="button"
            textContent="Atualizar avatar"
          />
        </AvatarContainer>

        <FormContainer>
          <CustomForm ref={formRef} onSubmit={() => null}>
            <TitleRegister>Cadastro de Candidato</TitleRegister>
            <Input
              icon={() => <FaUserTie size={24} />}
              name="chapa"
              placeholder="Nome da chapa"
            />
            <Input
              extraStyles={{ marginTop: 17 }}
              name="codigo"
              placeholder="Código"
              icon={() => <RiLockPasswordFill size={24} />}
            />
            <Button
              extraStyles={{
                marginTop: 32,
              }}
              maxWidth="242px"
              maxHeight="59px"
              type="submit"
              textContent="Cadastrar candidato"
            />
          </CustomForm>
        </FormContainer>
      </RegisterContainer>
    </Container>
  );
};

export default SignUpCandidate;
