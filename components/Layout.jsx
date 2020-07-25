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
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
