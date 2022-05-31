import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Styles
import { GlobalStyle } from "./GlobalStyles";
//Components
import Upload from "./Components/Upload/Upload";
import Player from "./Components/Player/Player";
// import Home from "./Components/Home";

const App = () => {
  const [audioSrcs, setAudioSrcs] = useState([]);
  const [audioInfo, setAudioInfo] = useState([]);

  //remove song from song list
  const removeSong = (n) => {
    if (n === -1) {
      setAudioInfo([]);
      setAudioSrcs([]);
    } else {
      setAudioInfo((prev) => prev.filter((audio, index) => index !== n));
      setAudioSrcs((prev) => prev.filter((audio, index) => index !== n));
    }
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Upload
              audioInfo={audioInfo}
              setAudioInfo={setAudioInfo}
              setAudioSrcs={setAudioSrcs}
              removeSong={removeSong}
            />
          }
        ></Route>
        <Route
          path="/player"
          element={
            <Player
              audioUrls={audioSrcs}
              audioInfo={audioInfo}
              removeSong={removeSong}
            />
          }
        ></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
