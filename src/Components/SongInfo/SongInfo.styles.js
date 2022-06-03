import styled from "styled-components";

export const Wrapper = styled.div`
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
    min-width: 350px;
  }

  li {
    cursor: pointer;
    margin: 5px 0;
    position: relative;
    //song text
    div {
      width: 95%;
    }
    //remove btn
    span {
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;
      :hover {
        color: var(--grey);
      }
    }

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
