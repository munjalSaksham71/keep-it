import "./TrashScreen.css";
import SideBar from "../components/SideBar/SideBar";
import { useBin } from '../context/bin-context';
import { useNote } from '../context/note-context';
import { useAuth } from '../context/auth-context';
import { AiFillDelete } from 'react-icons/ai';
import { MdRestore } from 'react-icons/md';
import parse from 'html-react-parser';

const TrashScreen = () => {
  const { binNotes, deleteBinNote } = useBin();
  const { user } = useAuth();
  const { createNote } = useNote();

  const restoreHandler = async (note) => {
    await createNote(note.title, note.content, note.tag, note.color, user.uid);
    await deleteBinNote(note.id);
  }

  const userTrashNotes = binNotes.filter((note) => note.userId === user.uid)
    return (
    <div className="layout">
      <SideBar />
      <p className="heading1 bin_heading">Bin</p>
      <div className="cards">
        {userTrashNotes.map((note, i) => (
          <div key={i} className="card m-2 up-curve-border">
            <div className="card_main pl-3 mt-2 mb-1">
              <div className="card_topic mb-1">{note.title}</div>
            </div>
            <div className="card_content pl-3 pr-1 mt-2">
              {parse(note.content)}
            </div>
            <div className="card_footer mt-2 mb-2 pl-3">
              <div className="card_buttons">
                <div
                  className="card_button"
                  onClick={() => deleteBinNote(note.id)}
                >
                  <AiFillDelete />
                </div>
                <div className="card_button" onClick={() => restoreHandler(note)}>
                    <MdRestore />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashScreen;
