import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { Wrapper, SongInfo, NotFound } from "./Player.styles";

const Player = ({ audioUrls, audioInfo }) => {
  const [index, setIndex] = useState(0);
  const [audioUrl, setAudio] = useState(audioUrls[index]);

  useEffect(() => {
    setAudio(audioUrls[index]);
  }, [index, audioUrls]);

  const changeSong = (n) => {
    setIndex((prev) => {
      if (prev + n >= 0) return (prev + n) % audioUrls.length;
      else return (prev + n + audioUrls.length) % audioUrls.length;
    });
  };

  //return
  if (!audioUrls.length && !audioInfo.length)
    return (
      <NotFound>
        Something went wrong, <br />
        <p>
          No audio found
          <br />
          <Link to="/">Click here to go back to choose songs...</Link>
        </p>
      </NotFound>
    );
  return (
    <Wrapper>
      <AudioPlayer
        changeSong={changeSong}
        audioUrl={audioUrl}
        audioInfo={audioInfo}
      />
      <SongInfo>
        Songs:
        <ol>
          {audioInfo.map((audio, ind) => (
            <li
              key={ind}
              onClick={() => setIndex(ind)}
              className={ind === index ? "active" : ""}
            >
              {audio.name}
            </li>
          ))}
        </ol>
      </SongInfo>
    </Wrapper>
  );
};
export default Player;
