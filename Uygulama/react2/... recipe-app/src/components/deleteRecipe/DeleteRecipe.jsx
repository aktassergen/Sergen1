import React from 'react';
import axios from 'axios';

const DeleteRecipe = ({ recipeId, onDelete }) => {
  const handleDelete = async () => {
    axios
    .delete(`http://localhost:3001/recipes/${recipeId}`)
    .then(() => {
      onDelete();
    })
    .catch((error) => {
      console.error('An error occurred during deletion', error);
    });
};

  return (
    <button onClick={handleDelete}> Delete</button>
  );
};

export default DeleteRecipe;
