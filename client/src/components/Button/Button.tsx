import React from 'react';
import StyledButton from './Button.styles';
import { ButtonStylesProps } from './types';

interface ButtonProps extends ButtonStylesProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

Button.defaultProps = {
  Size: 'default',
  variant: 'default',
};

export default Button;
