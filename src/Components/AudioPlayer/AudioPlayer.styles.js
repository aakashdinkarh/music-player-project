import styled from "styled-components";

export const Content = styled.div`
  min-width: 400px;

  /* custom design of range input */
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: var(--lightGrey);
    height: 4px;
    border-radius: 5px;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--skyBlue);
    height: 20px;
    width: 7px;
    border-radius: 5px;
  }

  .seekBarInfo {
    display: flex;
    justify-content: center;
    align-items: center;

    input[name="seekBar"] {
      width: 70%;
      max-width: 350px;
      margin: 0 10px;
    }
  }

  .controls {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;

    .volContainer {
      span {
        position: relative;
        left: 20px;
        top: 25px;
        font-size: initial;
        color: var(--white);
        font-weight: 600;
      }
      input[name="volume"] {
        transform: rotate(-90deg);
        width: 60px;
      }
    }
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  margin: 10px 20px;
  position: relative;
  border-radius: 50%;
  border: none;
  background-color: var(--darkGrey);
  box-shadow: 0 0 10px 2px var(--grey), 0 0 10px 1px var(--skyBlue) inset;
  color: var(--lightGrey);
  font-size: var(--fontSmall);

  span {
    display: inline-block;
    width: max-content;
    position: absolute;
    top: 40px;
    left: -12px;
    font-weight: 600;
    font-size: initial;
    color: var(--white);
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 550px) {
    margin: 10px 2%;
  }
`;

export const Spinner = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 5px solid black;
  border-color: var(--darkGrey) var(--grey) var(--grey) var(--grey);
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
