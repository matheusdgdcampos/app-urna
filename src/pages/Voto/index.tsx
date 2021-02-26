import { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Input } from '~/components';

import {
  Container,
  ActionContainer,
  Display,
  Display_Label,
  Display_InfoCandidateLabel,
  Display_CandidateInformations,
  Display_ConfirmButtonVote,
  ButtonNumber,
  NumberButtonsContainer,
  CancelAction,
  ClearFieldAction,
  ConfirmAction,
  FireButtonActions,
} from './styles';

const Voto = () => {
  const formRef = useRef<FormHandles>(null);

  const handleInsertInputValue = useCallback((input: string) => {
    formRef.current?.setData({
      candidato: formRef.current?.getFieldValue('candidato') + input,
    });
  }, []);

  const handleClearFieldValue = useCallback(() => {
    formRef.current?.clearField('candidato');
  }, []);

  return (
    <Container>
      <Display>
        <Form ref={formRef} onSubmit={() => console.log('foi')}>
          <Display_Label>Código do candidato:</Display_Label>
          <Input
            extraStyles={{
              maxWidth: 412,
              marginLeft: 130,
            }}
            name="candidato"
            disabled
          />
          <Display_InfoCandidateLabel>
            Dados do candidato:
          </Display_InfoCandidateLabel>

          <Display_CandidateInformations>teste</Display_CandidateInformations>

          <Display_ConfirmButtonVote>
            <button type="button">Confirmar</button>
          </Display_ConfirmButtonVote>
        </Form>
      </Display>

      <ActionContainer>
        <NumberButtonsContainer>
          <ButtonNumber onClick={() => handleInsertInputValue('1')}>
            1
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('2')}>
            2
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('3')}>
            3
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('4')}>
            4
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('5')}>
            5
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('6')}>
            6
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('7')}>
            7
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('8')}>
            8
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('9')}>
            9
          </ButtonNumber>
          <ButtonNumber onClick={() => handleInsertInputValue('0')}>
            0
          </ButtonNumber>
        </NumberButtonsContainer>

        <FireButtonActions>
          <CancelAction onClick={handleClearFieldValue}>cancelar</CancelAction>
          <ClearFieldAction onClick={handleClearFieldValue}>
            limpar
          </ClearFieldAction>
          <ConfirmAction>confirmar</ConfirmAction>
        </FireButtonActions>
      </ActionContainer>
    </Container>
  );
};

export default Voto;
