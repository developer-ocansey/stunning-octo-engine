import React, {useEffect} from "react";
import { ModalProvider } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./routes";


function Libra() {
    return (
        <ModalProvider>
            <Routes />
            <ToastContainer />
        </ModalProvider>
    );
}

export default Libra;