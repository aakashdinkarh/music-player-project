import styled from "styled-components";

export const AudioContent = styled.div`
  height: 100%;
  width: 100%;

  .audioOverflow {
    background: var(--darkGrey);
    color: var(--white);
    font-weight: 600;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: auto;
    /* height: 50%; */
    max-height: 450px;
    min-height: 300px;
    position: relative;

    .audioThumb {
      height: 200px;
      width: 200px;
      margin: auto;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .songDetailsContainer {
      border: 1px solid var(--medGrey);
      overflow: auto;
      .songDetails {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        min-width: 400px;
        max-width: 620px;

        .currentSong {
          margin: 10px 5%;
          text-align: left;
        }
      }
    }

    @media screen and (max-width: 550px) {
      font-weight: initial;
    }
  }
`;
