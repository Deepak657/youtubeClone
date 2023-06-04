import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import VIdeoPlay from "./components/VIdeoPlay";
import Home from "./pages/Home";
import { GlobalStyle } from "./globleStyle/GlobleStyle";
import Header from "./components/Header/Header";
// import { ThemeProvider } from "styled-components";

function App() {
  const [search, setSearch] = useState("");
  // const handleInputChange = (value: string) => {
  //   setSearch(value);
  // };
  console.log(search);

  return (
    <>
      <GlobalStyle />
      <Header onChange={(value: string) => setSearch(value)} />
      <Routes>
        <Route path="/" element={<Home value={search} />} />
        <Route path="video/:vId?" element={<VIdeoPlay />} />
      </Routes>
    </>
  );
}

export default App;
