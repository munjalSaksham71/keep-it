import { useState } from "react";
import "./AddNote.css";

const AddNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    setNote((prevNote) => {
      return {
        ...prevNote,
        [e.target.name]: e.target.value,
      };
    });
  }

  const submitNote = (e) => {
    e.preventDefault();
    props.onAdd(note);
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
