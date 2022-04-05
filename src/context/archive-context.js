import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";

const ArchiveContext = createContext();

const useArchive = () => useContext(ArchiveContext);

const ArchiveContextProvider = ({ children }) => {
  const [archiveNotes, setArchiveNotes] = useState([]);
  const archiveCollectionRef = collection(db, "archive");

  const createArchiveNotes = async (title, content, userId) => {
    try {
      await addDoc(archiveCollectionRef, { title, content, userId });
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteArchiveNote = async (id) => {
    const noteDoc = doc(db, "archive", id);
    try {
      await deleteDoc(noteDoc);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(archiveCollectionRef, (docs) => {
      setArchiveNotes(docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsub();
    };
  }, [archiveCollectionRef]);

  return (
    <ArchiveContext.Provider
      value={{ archiveNotes, createArchiveNotes, deleteArchiveNote }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

export { useArchive, ArchiveContextProvider };
