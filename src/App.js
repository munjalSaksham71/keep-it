import { useState } from 'react';
import './App.css';
import AddNote from './components/AddNote/AddNote';
import Header from './components/Header/Header';
import ViewNote from './components/ViewNote/ViewNote';

function App() {
  
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  console.log(notes);
  return (
    <div className="App">
      <Header />
      <AddNote onAdd={addNote} />
      <ViewNote notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
