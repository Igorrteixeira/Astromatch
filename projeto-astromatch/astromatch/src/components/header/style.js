import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 60px;
  box-shadow: 0px 0px 20px #282526a0;
  border-radius: 10px 10px 20px 20px;
  font-family: "Dancing Script", cursive;

  h1 {
    text-shadow: 1px 1px #1817179f;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (max-device-width: 400px) {
    &:hover {
      transform: scale(none);
    }
  }
`;
