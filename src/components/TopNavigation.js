import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TopNavigation = ({ isAuthenticated, logout }) => (
  <div className="ui secondary pointing menu">
    <NavLink exact to="/" className="item">
      BGShop
    </NavLink>
    <NavLink exact to="/games" className="item">
      Games
    </NavLink>
    <NavLink exact to="/games/new" className="item">
      <i className="icon plus" />
      Add New Game
    </NavLink>

    {isAuthenticated ? (
      <div className="right menu">
        <button onClick={logout} className="item">
          Logout
        </button>
      </div>
    ) : (
      <div className="right menu">
        <NavLink to="/signup" className="item">
          Signup
        </NavLink>
        <NavLink to="/login" className="item">
          Login
        </NavLink>
      </div>
    )}
  </div>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default TopNavigation;
