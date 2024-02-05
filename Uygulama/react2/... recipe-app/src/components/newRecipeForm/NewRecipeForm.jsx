import React, { useState } from "react";
import "./newRecipeForm.css";

const NewRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    // kaydetme işleminden sonra sayfanın yeniden yüklenmesini engelliyoruz.
    event.preventDefault();

    // Her alanın dolu olup olmadığını kontrol et
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

    // Hata varsa setErrors ile state'i güncelle ve kaydetme işlemi yapma
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Loading durumunu başlat
    setIsLoading(true);

    try {
      // normalde burada datayı server'a submit ediyoruz.
      const newRecipe = {
        title,
        description,
        image,
      };

      // Simüle edilmiş bir asenkron işlem (API çağrısı gibi)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // formun içeriğini temizliyoruz.
      onAddRecipe(newRecipe);
      setTitle("");
      setDescription("");
      setImage("");
      setErrors({});
    } catch (error) {
      console.error("Recipe submission failed", error);
    } finally {
      // Loading durumunu sıfırla
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
