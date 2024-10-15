import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Styles
import { GlobalStyle } from "./GlobalStyles";
//Components
import Upload from "./Components/Upload/Upload";
import Player from "./Components/Player/Player";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  const [audioInfo, setAudioInfo] = useState([]);

  //remove song from song list
  const removeSong = (n) => {
    if (n === -1) {
      //remove all songs
      setAudioInfo([]);
    } else {
      //remove specific song with index n
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
