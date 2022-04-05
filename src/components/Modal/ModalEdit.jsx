import { useState } from "react";
import { useNote } from "../../context/note-context";
import { useModal } from "../../context/model-context";
import "./Modal.css";
import ReactQuill from "react-quill";

const ModalEdit = ({ note }) => {
  console.log(note);
  const [updateTitle, setUpdateTitle] = useState(note.title);
  const [updateContent, setUpdateContent] = useState(note.content);
  const { updateNote } = useNote();
  const { modalDispatch } = useModal();

  const updateDoc = (e) => {
    e.preventDefault();
    updateNote(updateTitle, updateContent, note.id);
    modalDispatch({type: 'CLOSE'});
  }

  return (
    <div className="modal">
      <div className="modal_content">
        <div className="heading2">Update Note</div>
      <form className="edit_note mt-4">
      <input
        name="title"
        onChange={(e) => setUpdateTitle(e.target.value)}
        value={updateTitle}
        placeholder={"Add a Title"}
        className="modal_title"
      />
        <div>
        <ReactQuill
            theme="snow"
            value={updateContent}
            onChange={setUpdateContent}
            modules={modules}
            formats={formats}
            className="note"
            placeholder="Add a note..."
          />
          <button onClick={updateDoc} className="btn btn-primary btn-align">
            Update
          </button>
          <button onClick={() => modalDispatch({type: 'CLOSE'})} className="btn btn-error ml-2">
            Cancel
          </button>
        </div>
    </form>
      </div>
    </div>
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

export default ModalEdit;
