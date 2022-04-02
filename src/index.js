import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NoteContextProvider } from "./context/note-context";
import { AuthContextProvider } from "./context/auth-context";
import { BrowserRouter } from "react-router-dom";
import { ArchiveContextProvider } from "./context/archive-context";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <NoteContextProvider>
        <ArchiveContextProvider>
          <App />
        </ArchiveContextProvider>
      </NoteContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
