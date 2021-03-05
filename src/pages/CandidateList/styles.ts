import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const EmptyCandidateContent = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;

  width: 100%;
  height: auto;

  margin: auto;
`;

export const TextDescription = styled.span`
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  color: #000;
  margin-bottom: 116px;
`;
