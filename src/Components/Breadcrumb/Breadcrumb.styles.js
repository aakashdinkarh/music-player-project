import styled from "styled-components";

export const Content = styled.div`
  background-color: var(--medGrey);
  border-radius: 0 0 5px 5px;
  margin-bottom: 10px;
  width: 95%;
  padding: 10px 20px;

  span {
    font-size: var(--fontSmall);
    color: var(--white);
    padding: 10px 5px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontExtraSmall);
    }
  }
  a:link {
    text-decoration: none;
  }
`;
