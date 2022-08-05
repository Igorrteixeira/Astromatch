import styled from "styled-components";

export const Container = styled.div`
  .containerCard {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
  }

  img {
    width: 300px;
    height: 430px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px #c2b4b4;
  }

  .foto {
    position: relative;
  }

  .name-age {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 450px;
    width: 300px;
    border-radius: 15px;
    background-image: linear-gradient(#0000001c, #111010fd);

    div {
      color: white;
      display: flex;
      align-items: center;
    }
    p,
    h2 {
      margin: 10px;
    }
  }
  .fundo {
    width: 400px;
    height: 460px;
  }

  button {
    border-radius: 100%;
    border: 3px solid #e94d62;
    gap: 5px;

    button:hover {
      background-color: #f5aa61;
      transform: scale(1.2);
    }
  }
  .botoes {
    display: flex;
    justify-content: space-around;
    
    height: 100%;
    width: 100%;
  }

  @media screen and (max-device-width: 400px) {
    .name-age,
    img {
      width: 80vw;
      height: 72vh;
    }
    .fundo {
      height: 100%;
      width: 100%;
    }

    button:hover {
      background-color: none;
      transform: scale(none);
    }
    button:active {
      background-color: #f5aa61;
    }
  }
`;
