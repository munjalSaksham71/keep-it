import { useState } from "react";
import ReactQuill from "react-quill";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import {  AiOutlineStop } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import "react-quill/dist/quill.snow.css";
import "./AddNote.css";
import "../ViewNote/ViewNote.css";

export const colors = ['primary', 'secondary', 'danger', 'warning', 'success'];
export const tags = ['Work', 'Teams', 'Family', 'Exercise'];

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("default")
  const [expand, setExpand] = useState(false);
  const [isDropdownOpen, SetIsDropdownOpen] = useState(false);
  const { createNote } = useNote();
  const { user } = useAuth();

  const submitNote = (e) => {
    e.preventDefault();
    createNote(title, content, tag, color,user.uid);
    setTitle("");
    setContent("");
    setColor("");
    setExpand(false);
  };

  const cancelHandler = () => {
    setExpand(false);
    setColor("default");
    setTitle("");
    setContent("");
  }

  return (
    <form className={`${color} add_note`}>
      <input
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        onClick={() => setExpand(true)}
        value={title}
        placeholder={expand ? "Title" : "Add a Note ..."}
        className={`title ${color}`} 
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
          <div className="container flex-align">
            <div className="tag_btn btn" onClick={() => SetIsDropdownOpen(isDropdownOpen ? false : true)}> {tag ? `${tag}` : `Tags`} <IoMdArrowDropdown /> </div>
            {isDropdownOpen && (
              <div className="dropdown-content container mt-3">
                {tags.map((tag) => (
                  <div className="tag" onClick={() => {setTag(tag); SetIsDropdownOpen(false)}}>{tag}</div>
                ))}
                <div className="tag" onClick={() => {setTag("None"); SetIsDropdownOpen(false)}}> <AiOutlineStop /></div>
              </div>
            )}
            <div className="container ml-auto pt-1">Card Color: 
                {colors.map((color) => (
                   <div className={`color_pallete ${color}`} onClick={() => setColor(color)}></div>
                ))}
              <AiOutlineStop className="color_pallete default" onClick={() => setColor('default')}/> 
            </div>
          </div>
          <button onClick={submitNote} className="btn btn-primary btn-align">
            Add
          </button>
          <button onClick={cancelHandler} className="btn btn-error ml-3 btn-align">
            Cancel
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
