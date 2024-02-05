import React, { useState } from 'react';
import axios from 'axios';

const EditRecipe = ({ recipe, onSave, onCancel }) => {
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });
  const [localRecipe, setLocalRecipe] = useState({ ...recipe }); // Local state for UI updates

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/recipes/${editedRecipe.id}`, editedRecipe);
      onSave(response.data); // Güncellenmiş veriyi buradan iletiyoruz
    } catch (error) {
      console.error('Güncelleme sırasında bir hata oluştu', error);
    }
  };
  

  const handleCancel = () => {
    // Eğer kullanıcı iptal ederse, local state'i geri al
    setEditedRecipe({ ...localRecipe });
    onCancel();
  };

  return (
    <div>
      <label>Title:</label>
      <input
        type='text'
        value={editedRecipe.title}
        onChange={(e) => setEditedRecipe({ ...editedRecipe, title: e.target.value })}
      />
      <label>Description:</label>
      <textarea
        value={editedRecipe.description}
        onChange={(e) => setEditedRecipe({ ...editedRecipe, description: e.target.value })}
      ></textarea>
      <label>Image URL:</label>
      <input
        type='text'
        value={editedRecipe.image}
        onChange={(e) => setEditedRecipe({ ...editedRecipe, image: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditRecipe;
