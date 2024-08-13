import React from 'react';
import EachNote from './EachNote';

const NoteList = ({ notes }) => {
  return (
    <div>
      <h2>My Notes</h2>
      {notes.map((note, index) => (
        <EachNote key={index} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
