import { useState } from 'react';
import './App.css';
import AddNote from './components/AddNote/AddNote';
import Header from './components/Header/Header';
import ViewNote from './components/ViewNote/ViewNote';

const App = () => {
  
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <AddNote onAdd={addNote} />
      <ViewNote notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
