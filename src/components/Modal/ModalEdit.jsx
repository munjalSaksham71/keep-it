import { useState } from "react";
import { useNote } from "../../context/note-context";
import { useModal } from "../../context/model-context";
import "./Modal.css";
import '../AddNote/AddNote.css';
import ReactQuill from "react-quill";
import { AiOutlineStop } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const ModalEdit = ({ note }) => {
  const [isDropdownOpen, SetIsDropdownOpen] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(note.title);
  const [updateContent, setUpdateContent] = useState(note.content);
  const [updateTag, setUpdateTag] = useState(note.tag);
  const [updateColor, setUpdateColor] = useState(note.color);
  const { updateNote } = useNote();
  const { modalDispatch } = useModal();

  const updateDoc = (e) => {
    e.preventDefault();
    updateNote(updateTitle, updateContent, updateTag, updateColor, note.id);
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
          <div className="container flex-align">
            <div className="tag_btn btn" onClick={() => SetIsDropdownOpen(isDropdownOpen ? false : true)}> {updateTag ? `${updateTag}` : `Tags`} <IoMdArrowDropdown /> </div>
            {isDropdownOpen && (
              <div className="dropdown-content container mt-3">
                <div className="tag" onClick={() => {setUpdateTag("Work"); SetIsDropdownOpen(false)}}> Work </div>
                <div className="tag" onClick={() => {setUpdateTag("Teams"); SetIsDropdownOpen(false)}}> Teams </div>
                <div className="tag" onClick={() => {setUpdateTag("Family"); SetIsDropdownOpen(false)}}> family </div>
                <div className="tag" onClick={() => {setUpdateTag("exercise"); SetIsDropdownOpen(false)}}> Exercise </div>
                <div className="tag" onClick={() => {setUpdateTag("None"); SetIsDropdownOpen(false)}}> <AiOutlineStop /></div>
              </div>
            )}
            <div className="container ml-auto pt-1">Card Color: 
              <div className="color_pallete primary" onClick={() => setUpdateColor('primary')}></div>
              <div className="color_pallete secondary" onClick={() => setUpdateColor('secondary')}></div>
              <div className="color_pallete danger" onClick={() => setUpdateColor('danger')}></div>
              <div className="color_pallete warning" onClick={() => setUpdateColor('warning')}></div>
              <div className="color_pallete success" onClick={() => setUpdateColor('success')}></div>
              <AiOutlineStop className="color_pallete default" onClick={() => setUpdateColor('default')}/> 
            </div>
          </div>
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
