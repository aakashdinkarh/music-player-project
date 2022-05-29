import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--grey);
  position: relative;
`;

export const SongInfo = styled.div`
  width: 80%;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: var(--white);
  position: relative;
  top: 15%;
  margin: auto;

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
