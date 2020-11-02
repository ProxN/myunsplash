import styled, { css } from 'styled-components';
import { InputStyleProps } from './types';

const inputSize: { [key: string]: string } = {
  small: '.5rem 1rem',
  default: '1rem 1.2rem',
  large: '1rem 1.4rem',
};

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconBox = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  left: 10px;
  color: ${({ theme }) => theme.colors.text.main};
  opacity: 0.7;
`;

export const StyledInput = styled.input<InputStyleProps>`
  ${({ theme, rounded, Size, showIcon }) => css`
    border: 1px solid ${theme.colors.borderColor};
    font-weight: ${theme.fontWeights[1]};
    border-radius: ${rounded ? '3rem' : '.4rem'};
    padding: ${inputSize[Size as string]};
    padding-left: ${showIcon && '3.5rem'};
    :focus {
      border-color: ${theme.colors.borderFocus};
    }
  `};
  ::placeholder {
    opacity: 0.5;
  }
  line-height: 1.5;
  outline: none;
`;
