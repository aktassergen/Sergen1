// Home.jsx
import React, { useContext } from 'react';
import './Home.css';
import { UserPreferencesContext } from '../../context/UserPreferencesContext';

const Home = () => {
  const { theme } = useContext(UserPreferencesContext);

  return (
    <div className='home' style={{ backgroundColor: theme === 'light' ? '#f5f5f5' : '#333' }}>
      <h1>Welcome to the Recipe Sharing Platform</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt.</p>
    </div>
  );
}

export default Home;
