import React, { useState } from "react";
//Components
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SongInfo from "../SongInfo/SongInfo";
import NotFound from "../NotFound/NotFound";
import { Wrapper, Content } from "../Upload/Upload.styles";
import { AudioContent } from "./Player.styles";
//image
import noImg from "../../download.png";
//Proptypes
// import PropTypes from "prop-types";

const Player = ({ audioInfo, removeSong }) => {
  const [index, setIndex] = useState(0);
  console.log(audioInfo);
  //breadcrumb element
  const breadcrumb_el = {
    Home: "/",
    Player: "/player",
  };
  if (audioInfo && !audioInfo.length) {
    return <NotFound />;
  }
  //extracting current song informations
  const name = audioInfo[index].name;
  const album = audioInfo[index].album;
  const artist = audioInfo[index].artist;
  const imgUrl = audioInfo[index].imgUrl;
  const audioUrl = audioInfo[index].audioUrl;

  //song Change
  const changeSong = (n) => {
    setIndex((prev) => {
      if (prev + n >= 0) return (prev + n) % audioInfo.length;
      else return (prev + n + audioInfo.length) % audioInfo.length;
    });
  };

  //return
  return (
    <Wrapper>
      <Breadcrumb breadcrumb_el={breadcrumb_el} />
      <Content>
        <AudioContent>
          <div className="audioOverflow">
            <div className="audioThumb">
              {/* <img src={require("./../../download.png")} alt="trying-img" /> */}
              <img
                src={imgUrl === null ? noImg : imgUrl}
                alt="audio-thumbnail"
              />
            </div>
            <AudioPlayer
              changeSong={changeSong}
              audioUrl={audioUrl}
              audioInfo={audioInfo}
              disabled="true"
            />
            <div className="songDetailsContainer">
              <div className="songDetails">
                <p className="currentSong">
                  Song: {name} <br />
                  Artist: {artist === null ? <i>Not Found</i> : artist} <br />
                  Album: {album === null ? <i>Not Found</i> : album} <br />
                </p>
              </div>
            </div>
          </div>
          <SongInfo
            audioInfo={audioInfo}
            setIndex={setIndex}
            index={index}
            removeSong={removeSong}
          />
        </AudioContent>
      </Content>
    </Wrapper>
  );
};

// Player.proptypes = {
//   audioInfo: PropTypes.shape({
//     name: PropTypes.string,
//     artist: PropTypes.string,
//     album: PropTypes.string,
//     size: PropTypes.number,
//     genre: PropTypes.string,
//     audioUrl: PropTypes.string,
//     imgUrl: PropTypes.string,
//   }),
//   removeSong: PropTypes.func,
// };

export default Player;
