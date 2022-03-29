import "./ViewNote.css";
import { AiFillDelete } from 'react-icons/ai'

const ViewNote = (props) => {
    const {notes} = props

    return (
    <div className="cards">
      {notes.map((note, i) => {
        return (
          <div class="card m-2 up-curve-border">
            <div class="card_main pl-3 mt-2 mb-1">
              <div class="card_topic mb-1">{note.title}</div>
            </div>
            <div class="card_content pl-3 pr-1 mt-2">{note.content}</div>
            <div class="card_footer mt-2 mb-2 pl-3">
              <div class="card_buttons">
                <div class="card_button">Pin to top</div>
              </div>
              <div class="card_icons">
                <AiFillDelete onClick={() => props.onDelete(i)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewNote;
