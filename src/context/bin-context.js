import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";

const BinContext = createContext();

const useBin = () => useContext(BinContext);

const BinContextProvider = ({ children }) => {
  const [binNotes, setBinNotes] = useState([]);
  const binCollectionRef = collection(db, "bin");

  const createBinNotes = async (title, content, userId) => {
    try {
      await addDoc(binCollectionRef, { title, content, userId });
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteBinNote = async (id) => {
    const noteDoc = doc(db, "bin", id);
    try {
      await deleteDoc(noteDoc);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    // const getBinNotes = async () => {
    //     const data = await getDocs(binCollectionRef);
    //     setBinNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //   };

    //   getBinNotes();
    // eslint-disable-next-line

    const unsub = onSnapshot(binCollectionRef, (docs) => {
      setBinNotes(docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsub();
    };
  }, [binCollectionRef]);

  return (
    <BinContext.Provider value={{ binNotes, createBinNotes, deleteBinNote }}>
      {children}
    </BinContext.Provider>
  );
};

export { useBin, BinContextProvider };
