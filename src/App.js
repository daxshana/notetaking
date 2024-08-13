import React, { useState } from 'react';
import "/home/ukijaffna/Documents/component4/src/component/AP.css";

import NoteForm from'../src/component/NoteForm';
import NoteList from '../src/component/NoteList';

function App() {
  const [notes, setNotes] = useState([]);


  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
