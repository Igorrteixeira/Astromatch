import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  color: white;

  h2 {
    margin: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin: 10px;
    gap: 15px;
    list-style: none;

    &:hover {
      background-color: #f5aa61;
      border-radius: 20px 0 0 20px;
    }
  }

  img {
    border-radius: 50px;
    border: 4px solid #f5aa61;
    width: 50px;
    height: 50px;
  }

  .botoes {
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: 10px;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
`;
