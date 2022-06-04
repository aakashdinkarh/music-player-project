import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, Label, Input } from "./Upload.styles";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Upload = ({ audioInfo, setAudioInfo, removeSong }) => {
  const setter = (val) => {
    return val === undefined ? null : val;
  };

  const fileChange = (e) => {
    const files = e.target.files;
    if (!files || !files.length) return;

    const jsMedia = window.jsmediatags;
    function getAudio(file) {
      let newEl = {
        name: null,
        size: null,
        audioUrl: null,
        album: null,
        artist: null,
        imgUrl: null,
      }; //object to store information about the audio
      jsMedia.read(file, {
        onSuccess: (info) => {
          try {
            newEl.album = setter(info.tags.album);
            newEl.artist = setter(info.tags.artist);

            //thumbnail picture from file
            const data = info.tags.picture.data;
            let base64string = "";
            for (let i = 0; i < data.length; i++)
              base64string += String.fromCharCode(data[i]);

            const imgUrl = `data:${
              info.tags.picture.format
            };base64,${window.btoa(base64string)}`;

            newEl.imgUrl = imgUrl;
          } catch (e) {
            console.log(e);
          }
        },
        onError: (e) => {
          console.log("cannot find metaData of song", e);
        },
      });

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newEl.name = file.name;
        newEl.size = `${(file.size / 1024 / 1024).toFixed(2)}MB`;
        newEl.audioUrl = reader.result;
        setAudioInfo((prev) => [...prev, newEl]);
      };
    }

    Object.values(files).map((file) => getAudio(file));
    e.target.value = null;
  };
  //breadcrumb element
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
