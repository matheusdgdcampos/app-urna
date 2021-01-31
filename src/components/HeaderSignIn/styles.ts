import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100%;
  max-height: 9.3rem;

  background: #fff;

  display: flex;

  border-bottom: 5px solid ${({ theme }) => theme.colors.orange};

  @media (max-width: 760px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2.3rem;
  line-height: 2.9rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin: auto;

  @media (max-width: 760px) {
    display: none;
  }
`;
