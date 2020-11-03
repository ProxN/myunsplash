import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Grid = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, auto));
  grid-template-rows: repeat(2, 20rem);
  grid-gap: 1.5rem 2rem;
  grid-auto-rows: 20rem;
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2.4rem;
  background: rgba(0, 0, 0, 0.6);
  transition: all 150ms ease-in-out;
  transform: scale(0);
  opacity: 0;
`;

export const PhotoBox = styled.div<{ rowSpan?: number }>`
  grid-row: span ${({ rowSpan }) => rowSpan};
  border-radius: 2.4rem;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
  transition: all 150ms ease-in-out;
  position: relative;
  :hover ${PhotoOverlay} {
    opacity: 1;
    transform: scale(1);
  }
`;

export const OveryLayAction = styled.div`
  margin-left: auto;
  align-self: flex-start;
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const ImageLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.textInverse.main};
    font-weight: ${theme.fontWeights[1]};
  `};

  margin-left: 2rem;
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 2.4rem;
`;
