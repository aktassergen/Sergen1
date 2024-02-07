import React, { useContext } from 'react';
import './header.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { UserPreferencesContext } from '../../context/UserPreferencesContext';
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext);

  return (
    <header className={`header ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="logo">Recipe Platform</div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe-list">Recipe List</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        size={40}
      />
    </header>
  );
};

export default Header;
