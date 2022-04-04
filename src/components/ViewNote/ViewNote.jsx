import "./ViewNote.css";
import { AiFillDelete } from "react-icons/ai";
import { VscPinned } from "react-icons/vsc";
import { IoIosColorPalette } from "react-icons/io";
import { BiArchiveIn } from "react-icons/bi";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import { useArchive } from "../../context/archive-context";
import { useBin } from "../../context/bin-context";
import parse from "html-react-parser";
import { useState } from "react";

const ViewNote = () => {
  const [isDropdownOpen, SetIsDropdownOpen] = useState({id: '', isOpen: false});
  const [cardColor, setCardColor] = useState({id: '', color: ''});
  const { notes, deleteNote } = useNote();
  const { user } = useAuth();
  const { createArchiveNotes } = useArchive();
  const { createBinNotes } = useBin();
  const userNotes = notes.filter((note) => note.userId === user.uid);

  const sendToArchiveHandler = async (note) => {
    await createArchiveNotes(note.title, note.content, user.uid);
    await deleteNote(note.id);
  };

  const sendToBin = async (note) => {
    await createBinNotes(note.title, note.content, user.uid);
    await deleteNote(note.id);
  };

  const dropdownHandler = (id) => {
    SetIsDropdownOpen({id: id, isOpen: true});
  }

  const colorPickerHandler = (id, color) => {
    setCardColor({id, color});
    SetIsDropdownOpen(false);
  }

  console.log(cardColor);

  return (
    <div className="cards">
      {userNotes.map((note, i) => (
        <div key={i} className={`${cardColor.id === i && cardColor.color} card m-2 up-curve-border`}>
          <div className="card_main pl-3 mt-2 mb-1">
            <div className="card_topic mb-1">{note.title}</div>
          </div>
          <div className="card_content pl-3 pr-1 mt-2">
            {parse(note.content)}
          </div>
          <div className="card_footer mt-2 mb-2 pl-3">
            <div className={`${cardColor.id === i && cardColor.color} card_buttons`}>
              <div className="card_button">
                <VscPinned />
              </div>
              <div
                className="card_button"
                onClick={() => sendToArchiveHandler(note)}
              >
                <BiArchiveIn />
              </div>
              <div
                className="card_button"
                onClick={() => dropdownHandler(i)}
              >
                <IoIosColorPalette />
              </div>
            </div>
            {isDropdownOpen.id === i && (
              <div className="dropdown-content mt-3">
                <div className="color_icon red" onClick={() => colorPickerHandler(i,'red')}> </div>
                <div className="color_icon black" onClick={() => colorPickerHandler(i,'black')}></div>
                <div className="color_icon green" onClick={() => colorPickerHandler(i,'green')}></div>
                <div className="color_icon yellow" onClick={() => colorPickerHandler(i,'yellow')}></div>
                <div className="color_icon orange" onClick={() => colorPickerHandler(i,'orange')}></div>
                <div className="color_icon blue"  onClick={() => colorPickerHandler(i,'blue')}></div>
                <div className="color_icon default"  onClick={() => colorPickerHandler(i,'default')}></div>
              </div>
            )}
            <div className="card_icons">
              <AiFillDelete onClick={() => sendToBin(note)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewNote;
