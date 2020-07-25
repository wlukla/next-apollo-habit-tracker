import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          list-style: none;
        }
      `}
    </style>
  </nav>
);

export default Nav;
