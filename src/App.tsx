import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./globleStyle/GlobleStyle";
import Header from "./components/Header/Header";
import SearchResults from "./pages/SearchResults";
import Watch from "./pages/Watch";
import Channel from "./pages/Channel";
import ChannelsHome from "./components/NastedComponentOfChannelPage/ChannelsHome";
import Videos from "./components/NastedComponentOfChannelPage/Videos";
import PlayLists from "./components/NastedComponentOfChannelPage/PlayLists";
import Community from "./components/NastedComponentOfChannelPage/Community";
import Channels from "./components/NastedComponentOfChannelPage/Channels";
import About from "./components/NastedComponentOfChannelPage/About";
import Live from "./components/NastedComponentOfChannelPage/Live";

function App() {
  const [title, setTitle] = useState("");
  // console.log(title);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home onChange={(value: string) => setTitle(value)} />}
        />
        <Route
          path="results/:q?"
          element={
            <SearchResults onChange={(value: string) => setTitle(value)} />
          }
        />
        <Route
          path="video/:vId?"
          element={
            <Watch term={title} onChange={(value: string) => setTitle(value)} />
          }
        />
        <Route path="channel/:channelId?" element={<Channel />}>
          <Route index element={<ChannelsHome />} />
          <Route path="featured" element={<ChannelsHome />} />
          <Route path="videos" element={<Videos />} />
          <Route path="streams" element={<Live />} />
          <Route path="playlists" element={<PlayLists />} />
          <Route path="community" element={<Community />} />
          <Route path="channels" element={<Channels />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
