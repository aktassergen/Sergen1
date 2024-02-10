import React, { useContext } from 'react';
import './header.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { UserPreferencesContext } from '../../context/UserPreferencesContext';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext);
  const {isAuthenticated, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className={`header ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="logo">Recipe Platform</div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe-list">Recipe List</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <button onClick={isAuthenticated ? handleLogout : handleLogin} >{isAuthenticated ? "Logout" : "Login"}</button>
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
