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
    justify-content: center;
    border-radius: 10px;
    overflow: auto;
    height: 50%;
    max-height: 500px;
  }
`;

export const SongInfo = styled.div`
  background-color: var(--white);
  color: var(--black);
  border-radius: 10px;
  padding: 10px 20px;
  position: relative;
  margin: 10px auto;
  .songInfoOverflow {
    overflow: auto;
  }
  ol {
    max-height: 200px;
    min-width: 400px;
  }

  li {
    cursor: pointer;
    margin: 5px 0;
    transition: all 0.3s;

    :hover {
      font-weight: bold;
    }
  }

  .active {
    font-style: italic;
    font-weight: bold;
    color: var(--darkSkyBlue);
  }
`;

export const NotFound = styled.div`
  width: 100%;
  height: 100%;
  font-size: var(--fontBig);
  p {
    font-size: var(--fontSmall);
  }
`;
