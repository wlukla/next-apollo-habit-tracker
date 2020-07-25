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
          justify-content: flex-start;
          list-style: none;
        }

        a {
          margin-right: 30px;
          font-family: Helvetica, Arial, sans-serif;
          text-decoration: none;
          font-size: 20px;
          color: #000000;
        }

        a :hover {
          color: #333333;
        }

        nav {
          padding: 20px;
          margin: 0;
          background-color: darkgrey;
        }
      `}
    </style>
  </nav>
);

export default Nav;
