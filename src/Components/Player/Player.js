import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Components
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Wrapper, Content } from "../Upload/Upload.styles";
import { AudioContent, SongInfo, NotFound } from "./Player.styles";

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
  const breadcrumb_el = {
    Home: "/",
    Player: "/player",
  };

  //return
  return (
    <>
      {!audioUrls.length && !audioInfo.length ? (
        <NotFound>
          <Breadcrumb breadcrumb_el={breadcrumb_el} />
          Something went wrong, <br />
          <p>
            No audio found
            <br />
            <Link to="/">Click here to go back to choose songs...</Link>
          </p>
        </NotFound>
      ) : (
        <Wrapper>
          <Breadcrumb breadcrumb_el={breadcrumb_el} />
          <Content>
            <AudioContent>
              <div className="audioOverflow">
                <AudioPlayer
                  changeSong={changeSong}
                  audioUrl={audioUrl}
                  audioInfo={audioInfo}
                  disabled="true"
                />
                <p className="currentSong">
                  Current Song: {audioInfo[index].name}
                </p>
              </div>
              <SongInfo>
                Songs:
                <div className="songInfoOverflow">
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
                </div>
              </SongInfo>
            </AudioContent>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default Player;
