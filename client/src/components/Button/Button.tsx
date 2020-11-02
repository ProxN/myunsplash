import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonStylesProps } from './types';

const Button: React.FC<ButtonStylesProps> = (props) => {
  return <StyledButton {...props} />;
};

Button.defaultProps = {
  Size: 'default',
  variant: 'default',
};

export default Button;
