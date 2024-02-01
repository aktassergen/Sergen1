import React, { useState } from "react";

const AddNote = ({onAdd}) => {
  const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        onAdd(text)

        setText("")
    }


  return (
    <div className="add-note">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add note..."
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
