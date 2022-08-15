import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, Label, Input } from "./Upload.styles";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Spinner from "../Spinner/Spinner";

const Upload = ({ audioInfo, setAudioInfo, removeSong }) => {
  const [isUploading, setIsUploading] = useState(false);

  const setter = (val) => {
    //set metadata info about the song (album, artist, imgUrl)
    return val === undefined ? null : val;
  };

  const fileChange = (e) => {
    setIsUploading(true);
    const files = e.target.files;
    if (!files || !files.length) return;

    const jsMedia = window.jsmediatags;

    const extractMetaData = (file, newEl) => {
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

            //base64 string of audio file
            const imgUrl = `data:${
              info.tags.picture.format
            };base64,${window.btoa(base64string)}`;

            newEl.imgUrl = setter(imgUrl);
          } catch (e) {
            console.log("could not set all meta datas", e);
          }
        },
        onError: (e) => {
          console.log("cannot find metaData of song", e);
        },
      });
    };

    function getAudio(file) {
      const pattern = /^audio\//;
      if (!pattern.test(file.type)) {
        //show temporary alert type box if file type audio was not found
        let el = document.createElement("div");
        el.setAttribute("class", "tempAlert");
        el.innerHTML = `Could not add some file(s)`;
        setTimeout(() => {
          el.parentNode.removeChild(el);
        }, 4000);
        document.body.appendChild(el);
        return;
      }
      let newEl = {
        //object to store information about the audio
        name: null,
        size: null,
        audioUrl: null,
        album: null,
        artist: null,
        imgUrl: null,
      };

      extractMetaData(file, newEl);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newEl.name = file.name;
        newEl.size = `${(file.size / 1024 / 1024).toFixed(2)}MB`;
        newEl.audioUrl = reader.result;
        setAudioInfo((prev) => [...prev, newEl]);
      };
    }

    Object.values(files).forEach((file) => getAudio(file));
    e.target.value = null;
    setIsUploading(false);
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
          To get strated with this app, choose your audio files below and then
          start streaming
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
          {isUploading ? <Spinner /> : null}
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
            <button className="upload-btn">Stream Now</button>
          </Link>
        ) : null}
      </Content>
    </Wrapper>
  );
};

export default Upload;
