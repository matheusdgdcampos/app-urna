import { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '~/components';

import { Container, EmptyCandidateContent, TextDescription } from './styles';

const CandidateList = () => {
  const history = useHistory();

  const handleNavigateToSignUpCandidate = useCallback(() => {
    history.push('/cadastrar/candidato');
  }, [history]);

  return (
    <Container>
      <EmptyCandidateContent>
        <TextDescription>Nenhum candidato cadastrado :(</TextDescription>

        <Button
          onClick={handleNavigateToSignUpCandidate}
          maxWidth="346px"
          type="button"
          textContent="Cadastrar novo candidato"
        />
      </EmptyCandidateContent>
    </Container>
  );
};

export default CandidateList;
