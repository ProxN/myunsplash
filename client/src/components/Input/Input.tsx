import React from 'react';
import { StyledInput, InputContainer, IconBox } from './Input.styles';
import { InputStyleProps } from './types';

interface InputProps extends InputStyleProps {
  placeholder?: string;
  icon?: React.ReactNode;
  label?: string;
  type?: 'text' | 'password' | 'email';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon, value } = props;
  return (
    <InputContainer>
      {icon && <IconBox>{icon}</IconBox>}
      <StyledInput value={value || ''} showIcon={!!icon} {...props} />
    </InputContainer>
  );
};

Input.defaultProps = {
  Size: 'default',
  type: 'text',
};

export default Input;
