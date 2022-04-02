import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase/config'

const ArchiveContext = createContext();

const useArchive = () => useContext(ArchiveContext);

const ArchiveContextProvider = ({children}) => {
    const [archiveNotes, setArchiveNotes] = useState([]);
    const archiveCollectionRef = collection(db, "archive");

    const createArchiveNotes = async (title, content, userId) => {
        try {
            await addDoc(archiveCollectionRef, { title, content, userId });
            setArchiveNotes((prevState) => ([...prevState, {title, content}]))
        } catch (error) {
            alert(error.message);
        }
    };

    const deleteArchiveNote = async (id) => {
        const noteDoc = doc(db, "archive", id);
        try {
            await deleteDoc(noteDoc);
            const temp = [...archiveNotes];
            temp.splice(id, 1);
            setArchiveNotes(temp);      
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        const getArchiveNotes = async () => {
            const data = await getDocs(archiveCollectionRef);
            setArchiveNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          };

          getArchiveNotes();
          // eslint-disable-next-line
    }, [])

    return <ArchiveContext.Provider value={{ archiveNotes, createArchiveNotes, deleteArchiveNote }}>{children}</ArchiveContext.Provider>
}

export {useArchive, ArchiveContextProvider}