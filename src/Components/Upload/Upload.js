import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, Label, Input } from "./Upload.styles";

const Upload = ({ audioInfo, setAudioInfo, setAudioSrcs }) => {
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
  };

  return (
    <Wrapper>
      <Content>
        <h2>Welcome!!</h2>
        <p>Click below 'Choose files' button to choose your audio file(s)...</p>
        <div className="audioInput">
          <Label>
            <Input
              onChange={fileChange}
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
            <ol>
              {audioInfo.map((song, index) => (
                <li key={index} className="listItem">
                  <div className="songName">Name : {song.name}</div>
                  <div className="songSize">Size: {song.size}</div>
                </li>
              ))}
            </ol>
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
