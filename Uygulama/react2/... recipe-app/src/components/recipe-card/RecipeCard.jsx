import React, { useState } from 'react';
import './recipeCard.css';
import DeleteRecipe from '../deleteRecipe/DeleteRecipe';
import EditRecipe from '../editRecipe/EditRecipe';

const RecipeCard = ({ id, title, description, image, deleteNote, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (editedRecipe) => {
    onEdit(editedRecipe);
    handleCancelEdit();
  };

  return (
    <div className='recipe-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {isEditing ? (
        <EditRecipe
          recipe={{ id, title, description, image }}
          onSave={handleSaveEdit} 
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <DeleteRecipe recipeId={id} onDelete={deleteNote} />
        </>
      )}
    </div>
  );
};

export default RecipeCard;
