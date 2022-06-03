import React from "react";

//styles
import { Wrapper } from "./SongInfo.styles";

const SongInfo = ({ audioInfo, setIndex, index, removeSong }) => (
  <Wrapper>
    Songs:
    <div className="songInfoOverflow">
      <ol>
        {audioInfo.map((audio, ind) => (
          <li
            key={ind}
            onClick={() => setIndex(ind)}
            className={ind === index ? "active" : ""}
          >
            <div>{audio.name}</div>
            <span
              className="fa-solid fa-remove"
              onClick={() => removeSong(ind)}
            ></span>
          </li>
        ))}
      </ol>
    </div>
  </Wrapper>
);

export default SongInfo;
