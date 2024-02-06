import React from "react";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import RecipeList from './components/recipe-list/RecipeList';
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm';
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <ApiProvider>
      <div className="app">
        <Header />
        <Home />
        <NewRecipeForm />
        <RecipeList />
      </div>
    </ApiProvider>
  );
}

export default App;
