import React, { useContext } from "react";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import RecipeList from './components/recipe-list/RecipeList';
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm';
import { ApiProvider } from "./context/ApiContext";
import { UserPreferencesContext } from "./context/UserPreferencesContext";

function App() {
  const { theme } = useContext(UserPreferencesContext); 

  return (
    <ApiProvider>
      <div className={`app ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Header />
        <Home />
        <NewRecipeForm />
        <RecipeList />
      </div>
    </ApiProvider>
  );
}

export default App;
