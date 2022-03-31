import { useState } from "react";
import { useNote } from "../../context/note-context";
import "./AddNote.css";

const AddNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const { createNote } = useNote();

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
    createNote(note.title, note.content);
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
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        className="note"
        rows={3}
      />
      <button onClick={submitNote} className="btn btn-primary mt-2">Add</button>
    </form>
  );
};

export default AddNote;
