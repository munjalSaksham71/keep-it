import { useState } from "react";
import { useNote } from "../../context/note-context";
import { useModal } from "../../context/model-context";
import "./Modal.css";

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
          <textarea
            onChange={(e) => setUpdateContent(e.target.value)}
            name="note"
            value={updateContent}
            placeholder={"Add a note..."}
            className="modal_note"
            rows={3}
          />
          <button onClick={updateDoc} className="btn btn-primary mt-2">
            Update
          </button>
          <button onClick={() => modalDispatch({type: 'CLOSE'})} className="btn btn-error mt-2 ml-2">
            Cancel
          </button>
        </div>
    </form>
      </div>
    </div>
  );
};

export default ModalEdit;
