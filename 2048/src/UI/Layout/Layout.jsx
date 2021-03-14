/* eslint-disable react/prop-types */
import React from 'react';
import Main from './Main';
import Content from './Content';

const Layout = ({ children }) => (
  <Main>
    <Content>
      {children}
    </Content>
  </Main>
);

export default Layout;
