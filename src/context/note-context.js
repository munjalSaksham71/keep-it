import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

const NoteContextProvider = ({children}) => {
    
    const noteReduce = (state, action) => {
        switch (action.type) {
            case 'ADD_NOTE':
                return {...state, notes: [...state.notes, action.payload]};
            case 'REMOVE_NOTE':
                return {...state, notes: [...state.notes.filter((item) => item !== action.payload)]}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(noteReduce, {
        notes: []
    })
    return <NoteContext.Provider value={{state, dispatch}}>{children}</NoteContext.Provider>
}

export {useNote, NoteContextProvider}