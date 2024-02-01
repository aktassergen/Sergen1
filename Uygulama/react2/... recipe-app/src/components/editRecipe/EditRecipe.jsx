import React, { useState } from "react";

const RecipeEdit = ({ recipe, updateRecipe, onCancel }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [image, setImage] = useState(recipe.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: recipe.id,
      title,
      description,
      image,
    };
    updateRecipe(updatedRecipe);
  };

  return (
    <div className="recipe-edit">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <div className="buttons">
          <button type="submit">Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeEdit;
