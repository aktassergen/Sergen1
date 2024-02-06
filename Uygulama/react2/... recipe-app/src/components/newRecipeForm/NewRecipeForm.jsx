import React, { useState } from "react";
import "./newRecipeForm.css";
import { useApi } from "../../context/ApiContext";

const NewRecipeForm = () => {
  const { addRecipe } = useApi(); // ApiContext'ten addRecipe fonksiyonunu al

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};
    if (!title.trim()) {
      errors.title = "Recipe title cannot be empty";
    }
    if (!description.trim()) {
      errors.description = "Recipe description cannot be empty";
    }
    if (!image.trim()) {
      errors.image = "Image URL cannot be empty";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const newRecipe = {
        title,
        description,
        image,
      };

      // Yeni tarifi API'ye gönder ve ardından listeye ekle
      await addRecipe(newRecipe);

      setTitle("");
      setDescription("");
      setImage("");
      setErrors({});
    } catch (error) {
      console.error("Recipe submission failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-recipe-form">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Recipe Title"
      />
      {errors.title && <p className="error-message">{errors.title}</p>}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
      ></textarea>
      {errors.description && <p className="error-message">{errors.description}</p>}
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image URL"
      />
      {errors.image && <p className="error-message">{errors.image}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Add Recipe"}
      </button>
    </form>
  );
};

export default NewRecipeForm;