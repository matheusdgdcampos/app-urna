import React, { HtmlHTMLAttributes } from 'react';

import { CSSProperties } from 'styled-components';

import { CustonButton } from './styles';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  textContent: string;
  textColor?: string;
  backgroundColor?: string;
  maxWidth?: string | number;
  maxHeight?: string | number;
  isTextBold?: boolean;
  type: 'button' | 'reset' | 'submit';
  extraStyles?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  maxHeight,
  maxWidth,
  textColor,
  textContent,
  isTextBold,
  type,
  extraStyles,
  ...rest
}) => {
  return (
    <CustonButton
      style={{
        maxHeight: maxHeight ?? '',
        maxWidth: maxWidth ?? '',
        ...extraStyles,
      }}
      isTextBold={isTextBold}
      backgroundColor={backgroundColor}
      textColor={textColor}
      type={type}
      {...rest}
    >
      {textContent}
    </CustonButton>
  );
};

export default Button;
