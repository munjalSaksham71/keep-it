import './AddNote.css'

const AddNote = () => {
    return (
        <div className="add_note">
            <input type="text" placeholder="Title" className="title" />
            <input type="text" placeholder="Add a Note..." className="note" />
            <button className="btn btn-primary mt-3">Add</button>
        </div>
    )
}

export default AddNote
