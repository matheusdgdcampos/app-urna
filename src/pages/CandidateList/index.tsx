import { Button } from '~/components';

import { Container, EmptyCandidateContent, TextDescription } from './styles';

const CandidateList = () => {
  return (
    <Container>
      <EmptyCandidateContent>
        <TextDescription>Nenhum candidato cadastrado :(</TextDescription>

        <Button type="button" textContent="Cadastrar novo candidato" />
      </EmptyCandidateContent>
    </Container>
  );
};

export default CandidateList;
