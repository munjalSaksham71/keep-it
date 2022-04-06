import { createContext, useReducer, useContext } from "react";

const ModalContext = createContext();

const useModal = () => useContext(ModalContext);

const ModalContextProvider = ({children}) => {

    const modalReducer = (state, action) => {
        switch (action.type) {
            case 'OPEN':
                return {isModalOpen : true}
            case 'CLOSE':
                return {isModalOpen : false}
            default:
                return {...state}
        }
    } 

    const [modalState, modalDispatch] = useReducer(modalReducer, {
        isModalOpen: false
    })
    return <ModalContext.Provider value={{modalState, modalDispatch}}>{children}</ModalContext.Provider>
}

export {useModal, ModalContextProvider};