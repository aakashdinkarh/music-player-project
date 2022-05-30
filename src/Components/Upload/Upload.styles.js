import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: var(--darkGrey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 95%;
  width: 95%;
  background-color: var(--medGrey);
  border-radius: 10px;
  padding: 20px 20px 0 20px;
  overflow: auto;
  color: var(--white);
  h2 {
    font-size: var(--fontBig);
  }
  p {
    margin-bottom: 30px;
  }
  div.audioInput {
    position: relative;
    height: 50px;
    margin: 10px auto;
  }
  .upload-btn {
    background: var(--darkGrey);
    border: 1px solid var(--white);
    border-radius: 5px;
    cursor: pointer;
    color: var(--white);
    font-size: var(--fontExtraSmall);
    padding: 5px 10px;
    transition: all 0.2s;
    margin: 10px 0;

    :hover {
      background-color: green;
      color: var(--black);
      border: 1px solid transparent;
      box-shadow: 2px 2px 2px var(--black);
    }
  }
  .songListContainer {
    border: 1px solid var(--grey);
    border-radius: 5px;
    padding: 5px 10px;
    position: relative;

    .removeAll {
      font-weight: bold;
      font-size: small;
      background: var(--darkGrey);
      border-radius: 3px;
      position: absolute;
      top: 3px;
      right: 3px;
      cursor: pointer;
      padding: 2px 5px;
      :hover {
        color: var(--grey);
      }
    }
    .overflowContainer {
      background: var(--darkGrey);
      border-radius: 5px;
      overflow: auto;
    }
  }
  ol#chosenSongs {
    padding: 0 0 5px 30px;
    margin: 5px 0;
    min-width: 300px;
    max-height: 250px;
    font-size: 0.9rem;

    .listItem {
      margin: 5px 0;
      position: relative;

      span {
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
        :hover {
          color: var(--grey);
        }
      }
    }
    .songSize {
      font-style: italic;
      color: var(--grey);
    }
  }
`;

export const Label = styled.label`
  background-color: var(--darkGrey);
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  height: 50px;
  position: absolute;
  line-height: 28px;
  transition: all 0.2s;
  font-size: var(--fontSmall);

  :hover {
    background: var(--medGrey);
  }
  :active {
    transform: translateY(5px);
  }
`;

export const Input = styled.input``;
