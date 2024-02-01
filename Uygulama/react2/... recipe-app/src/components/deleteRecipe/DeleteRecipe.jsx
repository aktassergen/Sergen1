import React from 'react';
import axios from 'axios';

const DeleteRecipe = ({ recipeId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${recipeId}`);
      onDelete(); // Silme işlemi başarılı olduğunda ana bileşene bilgi gönder
      window.location.reload();
    } catch (error) {
      console.error('Silme işlemi sırasında bir hata oluştu', error);
    }
  };

  return (
    <button onClick={handleDelete}> Delete</button>
  );
};

export default DeleteRecipe;
