import React, { useState } from 'react';
import './recipeCard.css';

const RecipeCard = ({ id, title, description, image, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedImage, setEditedImage] = useState(image);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Düzenleme iptal edildiğinde, giriş alanlarını orijinal değerlerine sıfırla
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedImage(image);
  };

  const handleSaveEdit = () => {
    // Düzenleme işlemi tamamlandığında, yeni değerleri ile bir nesne oluşturup onEdit fonksiyonuna geçir
    onEdit({ id, title: editedTitle, description: editedDescription, image: editedImage });
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Silme işlemi onDelete fonksiyonu aracılığıyla gerçekleştirilir
    onDelete(id);
  };

  return (
    <div className='recipe-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {isEditing ? (
        <div>
          <label>Title:</label>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <label>Description:</label>
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <label>Image URL:</label>
          <input
            type='text'
            value={editedImage}
            onChange={(e) => setEditedImage(e.target.value)}
          />
          <div className="recipe-card-button">
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="recipe-card-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      )}
    </div>
  );
};

export default RecipeCard;
