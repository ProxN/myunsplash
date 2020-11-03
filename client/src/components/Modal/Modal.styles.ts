import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;

  background: rgba(0, 0, 0, 0.25);
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  top: 0;
  width: 100vw;
  z-index: 99;
`;

export const ModalContent = styled.div<{ width?: string }>`
  ${({ theme, width }) => css`
    background: ${theme.colors.bg};
    width: ${width || 'max-content'};
  `};

  padding: 2rem 3rem;
  border-radius: 1.2rem;
`;

export const ModalHeader = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[1]};
    color: ${theme.colors.text.main};
  `};
`;

export const ModalBody = styled.div`
  margin-top: 2rem;
`;
