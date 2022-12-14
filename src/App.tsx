import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
