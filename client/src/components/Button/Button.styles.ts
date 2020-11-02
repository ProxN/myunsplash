import styled, { css, CSSProp } from 'styled-components';
import { ButtonStylesProps } from './types';

const butonSize: { [key: string]: string } = {
  small: '.6rem 1rem',
  default: '.8rem 1.5rem',
  large: '1.5rem 2rem',
};

const PrimaryStyles = css`
  ${({ theme }) => css`
    background: ${theme.colors.primary.main};
    color: ${theme.colors.textInverse.main};
    :hover {
      background: ${theme.colors.primary.dark};
    }
  `};
`;

const DefaultStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.text.main};
    border: 1px solid ${theme.colors.borderColor};
    :hover {
      background: ${theme.colors.textInverse.secondary};
    }
  `};
`;

const DangerStyles = css`
  ${({ theme }) => css`
    background: ${theme.colors.danger.main};
    color: ${theme.colors.textInverse.main};
    :hover {
      background: ${theme.colors.danger.dark};
    }
  `};
`;

const styles: { [key: string]: CSSProp } = {
  primary: PrimaryStyles,
  default: DefaultStyles,
  danger: DangerStyles,
};

export const StyledButton = styled.button<ButtonStylesProps>`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  outline: none;
  transition: all 150ms ease-in-out;
  ${({ theme, Size, rounded }) => css`
    font-weight: ${theme.fontWeights[1]};
    font-size: ${theme.fontSizes[1]}px;
    line-height: ${theme.lineHeight};
    padding: ${butonSize[Size as string]};
    border-radius: ${rounded ? '3rem' : '4px'};
  `};
  ${(props) => styles[props.variant as string]};
`;

export const ts = '';
