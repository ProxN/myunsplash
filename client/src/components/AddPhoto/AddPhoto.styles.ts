import styled from 'styled-components';

export const InputGroup = styled.div`
  margin-bottom: 1.4rem;
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  opacity: 0.9;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
  display: block;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button:nth-child(1) {
    margin-right: 1rem;
  }
`;
