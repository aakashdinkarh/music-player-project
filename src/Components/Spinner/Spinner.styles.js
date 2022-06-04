import styled from "styled-components";

export const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  margin: 10px auto;
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
