import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []); // Boş bağımlılık dizisi sayesinde sadece bir kere çalışır

  const fetchRecipes = () => {
    axios
      .get('http://localhost:3001/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => {
        console.log('Tarifler alınırken bir hata oluştu!', error);
      });
  };

  const addRecipe = (newRecipe) => {
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
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const editRecipe = (editedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === editedRecipe.id ? editedRecipe : recipe
    );
    setRecipes(updatedRecipes);
  };

  return (
    <ApiContext.Provider value={{ recipes, fetchRecipes, addRecipe, deleteRecipe, editRecipe }}>
      {children}
    </ApiContext.Provider>
  );
};
