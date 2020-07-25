import React from 'react';
import Head from 'next/head';

import Nav from './Nav';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Tracker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main>{children}</main>
  </div>
);

export default Layout;
