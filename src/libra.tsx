import React, {useEffect} from "react";
import { ModalProvider } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Firebase, {FirebaseContext} from "./components/Firebase";
import { Routes } from "./routes";


function Libra() {
    return (
    <FirebaseContext.Provider value={new Firebase()}>
        <ModalProvider>
            <Routes />
            <ToastContainer />
        </ModalProvider>
    </FirebaseContext.Provider>
    );
}

export default Libra;