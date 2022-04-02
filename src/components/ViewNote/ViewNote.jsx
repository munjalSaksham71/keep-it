import "./ViewNote.css";
import { AiFillDelete } from "react-icons/ai";
import { VscPinned } from 'react-icons/vsc'
import { BiArchiveIn } from 'react-icons/bi'
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import { useArchive } from "../../context/archive-context";
import parse from 'html-react-parser';

const ViewNote = () => {
  const { notes, deleteNote } = useNote();
  const { user } = useAuth();
  const { createArchiveNotes } = useArchive();
  const userNotes = notes.filter((note) => note.userId === user.uid); 

  const sendToArchiveHandler = async (note) => {
   await createArchiveNotes(note.title, note.content, user.uid)
   await deleteNote(note.id);
  }

  return (
    <div className="cards">
      {userNotes.map((note, i) => (
          <div key={i} className="card m-2 up-curve-border">
            <div className="card_main pl-3 mt-2 mb-1">
              <div className="card_topic mb-1">{note.title}</div>
            </div>
            <div className="card_content pl-3 pr-1 mt-2">{parse(note.content)}</div>
            <div className="card_footer mt-2 mb-2 pl-3">
              <div className="card_buttons">
                <div className="card_button"><VscPinned /></div>
                <div className="card_button" onClick={() => sendToArchiveHandler(note)} ><BiArchiveIn /></div>
              </div>
              <div className="card_icons">
                <AiFillDelete onClick={() => deleteNote(note.id)} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ViewNote;
