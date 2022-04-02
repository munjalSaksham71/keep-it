import { useState } from "react";
import ReactQuill from "react-quill";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import "react-quill/dist/quill.snow.css";
import "./AddNote.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [expand, setExpand] = useState(false);
  const { createNote } = useNote();
  const { user } = useAuth();

  const submitNote = (e) => {
    e.preventDefault();
    createNote(title, content, user.uid);
    setTitle("");
    setContent("");
  };

  return (
    <form className="add_note">
      <input
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        onClick={() => setExpand(true)}
        value={title}
        placeholder={expand ? "Title" : "Add a Note ..."}
        className="title"
      />
      {expand === true && (
        <div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="note"
            placeholder="Add a note..."
          />
          <button onClick={submitNote} className="btn btn-primary btn-align">
            Add
          </button>
        </div>
      )}
    </form>
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

export default AddNote;
