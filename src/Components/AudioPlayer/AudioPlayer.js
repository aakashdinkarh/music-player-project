import React, { useState, useRef } from "react";
import { Content, Button } from "./AudioPlayer.styles";

const AudioPlayer = ({ changeSong, audioUrl, audioInfo }) => {
  const player = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false); //play state of player
  const [isRepeatOn, setIsRepeatOn] = useState(false); //state for repeat one song
  const [totalTime, setTotalTime] = useState(null); //total duration of the current playing song
  const [currentTime, setCurrentTime] = useState(0); //current time of the song
  const singleSong = audioInfo.length === 1;

  const Audio = (
    <audio
      src={audioUrl}
      ref={player}
      onLoadedData={() => handleOnLoadedData()}
      onTimeUpdate={() => setCurrentTime(player.current.currentTime)}
      onEnded={() => handleSongChange(1)}
      hidden
    ></audio>
  );

  //Handle OnLoaded Data
  const handleOnLoadedData = () => {
    setTotalTime(player.current.duration);
    if (isPlaying) {
      player.current.play();
    }
  };
  //Handle Play Pause
  const handleToggle = () => {
    if (isPlaying) {
      player.current.pause();
    } else {
      player.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  //Handle Song change
  const handleSongChange = (n) => {
    if (isRepeatOn || singleSong) songReplay();
    else changeSong(n);
  };
  //SeekBar and Volume Input change
  const handleInput = (e) => {
    if (e.target.name === "seekBar")
      player.current.currentTime = e.currentTarget.value;
    else player.current.volume = e.currentTarget.value;
  };
  //Replay the song
  const songReplay = () => {
    player.current.currentTime = 0;
    if (isPlaying) player.current.play();
  };

  return (
    <>
      {/* hidden audio player */}
      {Audio}
      <Content id="audioPlayer">
        <div className="seekBarInfo">
          <span>{`${Math.floor(currentTime / 60)}:${(
            "0" + Math.floor(currentTime % 60)
          ).slice(-2)}`}</span>
          <input
            type="range"
            max={totalTime}
            value={currentTime}
            min="0"
            step="any"
            name="seekBar"
            onInput={handleInput}
          />
          <span>{`${Math.floor(totalTime / 60)}:${(
            "0" + Math.floor(totalTime % 60)
          ).slice(-2)}`}</span>
        </div>
        <div className="controls">
          <Button
            title="Repeat one"
            onClick={() => setIsRepeatOn((prev) => !prev)}
          >
            {isRepeatOn ? "On" : "Off"}
            <span>Repeat-1</span>
          </Button>
          <Button onClick={() => handleSongChange(-1)}>
            <i className="fa-solid fa-backward-step"></i>
          </Button>
          <Button style={{ transform: "scale(1.3)" }} onClick={handleToggle}>
            {isPlaying ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </Button>
          <Button onClick={() => handleSongChange(1)}>
            <i className="fa-solid fa-forward-step"></i>
          </Button>
          <div className="volContainer">
            <span>Volume</span>
            <input
              type="range"
              max="1"
              min="0"
              step="0.01"
              name="volume"
              onInput={handleInput}
            />
          </div>
        </div>
      </Content>
    </>
  );
};

export default AudioPlayer;

//logo
//make responsive
