/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => (
  <Main>
    <Content>
      {children}
    </Content>
  </Main>
);

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  min-height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
