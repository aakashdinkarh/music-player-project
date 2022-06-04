import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Styles
import { GlobalStyle } from "./GlobalStyles";
//Components
import Upload from "./Components/Upload/Upload";
import Player from "./Components/Player/Player";

const App = () => {
  const [audioInfo, setAudioInfo] = useState([]);

  //remove song from song list
  const removeSong = (n) => {
    if (n === -1) {
      setAudioInfo([]);
    } else {
      setAudioInfo((prev) => prev.filter((audio, index) => index !== n));
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
              removeSong={removeSong}
            />
          }
        ></Route>
        <Route
          path="/player"
          element={<Player audioInfo={audioInfo} removeSong={removeSong} />}
        ></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
