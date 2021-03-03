import React, { HtmlHTMLAttributes } from 'react';

import { CustonButton } from './styles';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  textContent: string;
  textColor?: string;
  backgroundColor?: string;
  maxWidth?: string | number;
  maxHeight?: string | number;
  isTextBold?: boolean;
  type: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  maxHeight,
  maxWidth,
  textColor,
  textContent,
  isTextBold,
  type,
  ...rest
}) => {
  return (
    <CustonButton
      style={{
        maxHeight: maxHeight ?? '',
        maxWidth: maxWidth ?? '',
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
