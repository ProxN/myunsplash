import React from 'react';
import { StyledInput, InputContainer, IconBox } from './Input.styles';
import { InputStyleProps } from './types';

interface InputProps extends InputStyleProps {
  placeholder?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon } = props;
  return (
    <InputContainer>
      {icon && <IconBox>{icon}</IconBox>}
      <StyledInput showIcon={!!icon} {...props} />
    </InputContainer>
  );
};

Input.defaultProps = {
  Size: 'default',
};

export default Input;
