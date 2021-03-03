import styled, { css } from 'styled-components';

interface ButtonProps {
  textColor?: string;
  backgroundColor?: string;
  isTextBold?: boolean;
}

export const CustonButton = styled.button<ButtonProps>`
  padding: 10px;
  ${({ textColor }) =>
    textColor
      ? css`
          color: ${textColor};
        `
      : css`
          color: #fff;
        `}
  ${({ backgroundColor, theme }) =>
    backgroundColor
      ? css`
          background: ${backgroundColor};
        `
      : css`
          background: ${theme.colors.orange_dark};
        `}
  font-size: 1rem;
  font-family: 'Ubuntu';
  ${({ isTextBold }) =>
    isTextBold
      ? css`
          font-weight: 700;
        `
      : css`
          font-weight: 400;
        `}

  width: 100%;
  height: 73px;
`;
