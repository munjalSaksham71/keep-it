import "./ViewNote.css";
import { AiFillDelete } from "react-icons/ai";
import { useNote } from "../../context/note-context";

const ViewNote = () => {
  const {
    state: { notes },
    dispatch
  } = useNote();

  return (
    <div className="cards">
      {notes.map((note, i) => {
        console.log(note);
        return (
          <div key={i} className="card m-2 up-curve-border">
            <div className="card_main pl-3 mt-2 mb-1">
              <div className="card_topic mb-1">{note.title}</div>
            </div>
            <div className="card_content pl-3 pr-1 mt-2">{note.content}</div>
            <div className="card_footer mt-2 mb-2 pl-3">
              <div className="card_buttons">
                <div className="card_button">Pin to top</div>
              </div>
              <div className="card_icons">
                <AiFillDelete onClick={() => dispatch({type: 'REMOVE_NOTE', payload: note})} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewNote;
