import "./ViewNote.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { VscPinned } from "react-icons/vsc";
import { BiArchiveIn } from "react-icons/bi";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import { useArchive } from "../../context/archive-context";
import { useBin } from "../../context/bin-context";
import parse from "html-react-parser";
import { useState } from "react";
import ModalEdit from "../Modal/ModalEdit";
import { useModal } from "../../context/model-context";

const ViewNote = () => {
  const [updateData, setUpdateData] = useState({})
  const { notes, deleteNote } = useNote();
  const { user } = useAuth();
  const { createArchiveNotes } = useArchive();
  const { createBinNotes } = useBin();
  const { modalState: { isModalOpen }, modalDispatch } = useModal();

  const sendToArchiveHandler = async (note) => {
    await createArchiveNotes(note.title, note.content, user.uid);
    await deleteNote(note.id);
  };

  const sendToBin = async (note) => {
    await createBinNotes(note.title, note.content, user.uid);
    await deleteNote(note.id);
  };

  const modelOpenHandler = (note) => {
    modalDispatch({type: 'OPEN'})
    setUpdateData(note);
  }

  const userNotes = notes.filter((note) => note.userId === user.uid)

  return (
    <div className="cards">
      {userNotes.map((note, i) => (
        <div key={i} className={`${note.color} card m-2 up-curve-border`}>
          <div className="card_main pl-3 mt-2 mb-1">
            <div className="card_topic mb-1">{note.title}</div>
          </div>
          <div className="card_content pl-3 pr-1 mt-2">
            {parse(note.content)}
          </div>
          <div className="card_footer mt-2 mb-2 pl-3">
            <div className={`${note.color} card_buttons`}>
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
                onClick={() => modelOpenHandler(note)}
              >
                <AiFillEdit />
              </div>
            </div>
            <div className="card_icons">
              <AiFillDelete onClick={() => sendToBin(note)} />
            </div>
          </div>
          {note.tag !== 'None' && <div class="card_badge btn btn-tag">{note.tag}</div> }
        </div>
      ))}
      {isModalOpen && <ModalEdit note={updateData}/>}
    </div>
  );
};

export default ViewNote;
