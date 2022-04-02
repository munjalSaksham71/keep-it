import SideBar from "../components/SideBar/SideBar";
import "./ArchiveScreen.css";
import "../components/ViewNote/ViewNote.css";
import { useArchive } from "../context/archive-context";
import { useNote } from "../context/note-context";
import { useAuth } from "../context/auth-context";
import parse from "html-react-parser";
import { BiArchiveOut } from 'react-icons/bi'

const ArchiveScreen = () => {
  const { archiveNotes, deleteArchiveNote } = useArchive();
  const { createNote } = useNote();
  const { user } = useAuth();
  console.log(archiveNotes);

  const removeFromArchive = async (note) => {
      await deleteArchiveNote(note.id);
      await createNote(note.title, note.content, user.uid)
  }

  return (
    <div className="layout">
      <SideBar />
      <p className="heading2 archive_heading">Archive Notes</p>
      <div className="cards">
        {archiveNotes.map((note, i) => (
          <div key={i} className="card m-2 up-curve-border">
            <div className="card_main pl-3 mt-2 mb-1">
              <div className="card_topic mb-1">{note.title}</div>
            </div>
            <div className="card_content pl-3 pr-1 mt-2">
              {parse(note.content)}
            </div>
            <div className="card_footer mt-2 mb-2 pl-3">
              <div className="card_buttons">
                <div className="card_button" onClick={() => removeFromArchive(note)} ><BiArchiveOut /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveScreen;
