import React, { useState } from "react";

const EditNote = ({ editNote, updateNote, onCancel }) => {
  const [text, setText] = useState(editNote.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(editNote.id, text);
  };

  return (
    <div className="edit-note">
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="buttons">
          <button type="submit">Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
