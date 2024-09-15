import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-brand">Movie at Fingure</NavLink>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="active-link"
            >
              Popular
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/top-rated"
              className="nav-link"
              activeClassName="active-link"
            >
              Top Rated
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/upcoming"
              className="nav-link"
              activeClassName="active-link"
            >
              Upcoming
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
