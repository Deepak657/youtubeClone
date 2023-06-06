import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./globleStyle/GlobleStyle";
import Header from "./components/Header/Header";
import SearchResults from "./pages/SearchResults";
import Watch from "./pages/Watch";
// import { ThemeProvider } from "styled-components";

function App() {
  const [title, setTitle] = useState("");
  console.log(title);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home onChange={(value: string) => setTitle(value)} />}
        />
        <Route path="results/:q?" element={<SearchResults />} />
        <Route path="video/:vId?" element={<Watch term={title} />} />
      </Routes>
    </>
  );
}

export default App;
