import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, Label, Input } from "./Upload.styles";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Upload = ({ audioInfo, setAudioInfo, setAudioSrcs, removeSong }) => {
  const fileChange = (e) => {
    const files = e.target.files;
    if (!files || !files.length) return;

    function getAudio(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const newEl = {
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
        };
        setAudioSrcs((prev) => [...prev, reader.result]);
        setAudioInfo((prev) => [...prev, newEl]);
      };
    }

    Object.values(files).map((file) => getAudio(file));
    e.target.value = null;
  };
  // //remove song from song list
  // const removeSong = (n) => {
  //   if (n === -1) {
  //     setAudioInfo([]);
  //     setAudioSrcs([]);
  //   } else {
  //     setAudioInfo((prev) => prev.filter((audio, index) => index !== n));
  //     setAudioSrcs((prev) => prev.filter((audio, index) => index !== n));
  //   }
  // };
  //Breadcrumb element
  const breadcrumb_el = {
    Home: "/",
  };

  return (
    <Wrapper>
      <Breadcrumb breadcrumb_el={breadcrumb_el} />
      <Content>
        <h2>Welcome!!</h2>
        <p>
          This is a music streaming app built using React. <br />
          To get strated with this app, choose your audio files below then
          upload them to start streaming
          <br />
          Click below 'Choose files' button to choose your audio file(s)...
        </p>
        <div className="audioInput">
          <Label>
            <Input
              onInput={(e) => fileChange(e)}
              type="file"
              accept=".mp3,audio/*"
              hidden
              multiple
            />
            Choose files...
          </Label>
        </div>

        <div className="songListContainer">
          Songs choosen :
          <br />
          {audioInfo.length ? (
            <span onClick={() => removeSong(-1)} className="removeAll">
              Clear All
            </span>
          ) : null}
          {audioInfo.length ? (
            <div className="overflowContainer">
              <ol id="chosenSongs">
                {audioInfo.map((song, index) => (
                  <li key={index} className="listItem">
                    <div className="songName">Name : {song.name}</div>
                    <div className="songSize">Size: {song.size}</div>
                    <span
                      className="fa-solid fa-remove"
                      onClick={() => removeSong(index)}
                    ></span>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
              No songs choosen
            </div>
          )}
        </div>
        {audioInfo.length ? (
          <Link to={audioInfo.length ? "/player" : "/"}>
            <button className="upload-btn">Upload</button>
          </Link>
        ) : null}
      </Content>
    </Wrapper>
  );
};

export default Upload;
