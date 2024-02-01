import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import RecipeList from './components/recipe-list/RecipeList';
import axios from 'axios';
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => {
        console.log('Tarifler alınırken bir hata oluştu!', error);
      });
  }, []);

  const handleAddRecipe = (newRecipe) => {
    axios
      .post('http://localhost:3001/recipes', newRecipe)
      .then((response) => {
        setRecipes((prevRecipes) => [...prevRecipes, response.data]);
      })
      .catch((error) => {
        console.log('Tarif eklenirken bir hata oluştu!', error);
      });
  };

  const deleteRecipe = (id) => {
    const deleteRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(deleteRecipes);
  };

  const startEditing = (recipe) => {
    console.log("Edit recipe:", recipe);
  };

  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} deleteNote={deleteRecipe} startEditing={startEditing} />
    </>
  );
}

export default App;
