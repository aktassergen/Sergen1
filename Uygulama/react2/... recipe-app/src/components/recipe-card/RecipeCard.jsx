import React from 'react'
import './recipeCard.css'

const RecipeCard = ({ id, title, description, image, deleteNote ,onEdit }) => {
  return (
    <div className='recipe-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteNote(id)}>delete</button>
      <button onClick={() => onEdit({ id, title, description, image })}>Edit</button>
    </div>
  );
}

export default RecipeCard
