/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => (
  <header className="header">
    <h1><img src="./images/logo.png" alt="Happy 100th Birthday Jerry!" /></h1>
    <nav>
      <ul>
        <li><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
        {/* <li><Link to="/real-world/" activeClassName="is-active">Real World</Link></li> */}
        <li><a href="https://airtable.com/appf7D6fF4UUK1uth/pagaqJvaCjL2dynU6/form">Submit New Photos of Jerry</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
