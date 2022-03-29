import { useState } from "react";
import { useNote } from "../../context/note-context";
import "./AddNote.css";

const AddNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const { dispatch } = useNote();

  const handleChange = (e) => {
    setNote((prevNote) => {
      return {
        ...prevNote,
        [e.target.name]: e.target.value,
      };
    });
  }

  const submitNote = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_NOTE', payload: note})
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <form className="add_note">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        className="title"
      />
      <input
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        className="note"
      />
      <button onClick={submitNote} className="btn btn-primary">Add</button>
    </form>
  );
};

export default AddNote;
