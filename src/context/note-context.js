import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../firebase/config";

const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "notes");

  const createNote = async (title, content, userId) => {
    try {
      await addDoc(notesCollectionRef, { title, content, userId });
      // setNotes((prevState) => [...prevState, { title, content, userId }]);
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteNote = async (id) => {
    console.log(id);
    const noteDoc = doc(db, "notes", id);
    try {
      await deleteDoc(noteDoc);
      // const temp = [...notes];
      // temp.splice(i, 1);
      // setNotes(temp);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    // const getNotes = async () => {
    //   const data = await getDocs(notesCollectionRef);
    //   setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    const unsub = onSnapshot(notesCollectionRef, (docs) => {
      setNotes(docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })

  return () => {
    unsub();
  }

    // getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <NoteContext.Provider value={{ notes, createNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteContextProvider };
