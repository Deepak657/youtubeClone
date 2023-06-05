import React from "react";
import { Route, Routes } from "react-router-dom";
import VIdeoPlay from "./components/VIdeoPlay";
import Home from "./pages/Home";
import { GlobalStyle } from "./globleStyle/GlobleStyle";
import Header from "./components/Header/Header";
import SearchVideoCard from "./components/Cards/SearchVideoCard";
import SearchResults from "./pages/SearchResults";
// import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video/:vId?" element={<VIdeoPlay />} />
        <Route path="results/:q?" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
