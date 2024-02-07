import React, { useContext } from 'react';
import './header.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { UserPreferencesContext } from '../../context/UserPreferencesContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext);

  return (
    <header className={`header ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="logo">Recipe Platform</div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Add Recipe</a></li>
          <li><a href="#">About</a></li>
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
