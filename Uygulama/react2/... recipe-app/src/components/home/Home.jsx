// Home.jsx
import React, { useContext } from 'react';
import './Home.css';
import { UserPreferencesContext } from '../../context/UserPreferencesContext';
import NewRecipeForm from '../newRecipeForm/NewRecipeForm'; // NewRecipeForm bileşenini import et
import RecipeList from '../recipe-list/RecipeList'; // NewRecipeForm bileşenini import et

const Home = () => {
  const { theme } = useContext(UserPreferencesContext);

  return (
    <div className="container"> {/* Stil sınıfını ekle */}
      <h1>Welcome to Recipe Platform!</h1>
      <p>This is the home page.</p>
      <NewRecipeForm />
      <RecipeList />
    </div>
  );
}

export default Home;
