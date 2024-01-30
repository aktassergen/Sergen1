import React, { useState } from "react";
import "./newRecipeForm.css";

const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

    const handleSubmit = (event) => {
        // kaydetme işleminden sonra sayfanın yeniden yüklenmesini engelliyoruz.
        event.preventDefault()
        // normalde burada datayı server'a submit ediyoruz.
        console.log("Submitting new recipe", {title, description, image});
        // formun içeriğini temizliyoruz.
        setTitle("")
        setDescription("")
        setImage("")

    }

  return (
    <form onSubmit={handleSubmit} className="new-recipe-form">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
      ></textarea>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image URL"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default NewRecipeForm;
