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

  return <Upload audioInfo={audioInfo} setAudioInfo={setAudioInfo} setAudioSrcs={setAudioSrcs} />

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Upload
              audioInfo={audioInfo}
              setAudioInfo={setAudioInfo}
              setAudioSrcs={setAudioSrcs}
            />
          }
        ></Route>
        <Route
          path="/player"
          element={<Player audioUrls={audioSrcs} audioInfo={audioInfo} />}
        ></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
