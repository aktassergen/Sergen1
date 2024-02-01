import React from 'react'

const Notes = ({notes, deleteNote, startEditing}) => {
  return (
    <div className='notes'>
        <h2>Notes</h2>
        {notes.map((note) => (
            <div className='note' key={note.id}>
                <p>{note.text}</p>
                <div className="buttons">
                    <button onClick={() => startEditing(note)}>Update</button>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Notes