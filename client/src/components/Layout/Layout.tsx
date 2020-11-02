import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles';
import Header from './Header';

const LayoutContainer = styled.div``;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
