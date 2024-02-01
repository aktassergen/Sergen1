import { useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
1;
function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState("");

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    const deletedNotes = notes.filter((note) => note.id !== id);
    setNotes(deletedNotes);
  };

  const startEditing = (note) => {
    setEditNote(note);
  };

  const updateNote = (id, text) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text } : note
    );
    setNotes(updatedNotes);
    setEditNote("");
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <section className="note-section">
        <Notes
          notes={notes}
          deleteNote={deleteNote}
          startEditing={startEditing}
        />
        <AddNote onAdd={addNote} />
      </section>
      {editNote && (
        <EditNote
          editNote={editNote}
          updateNote={updateNote}
          onCancel={() => setEditNote("")}
        />
      )}
    </div>
  );
}

export default App;
