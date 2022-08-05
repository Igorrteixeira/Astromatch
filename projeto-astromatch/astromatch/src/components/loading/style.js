import styled from "styled-components";

export const ContainerLoader = styled.div`
  position: absolute;
  background-color: #cf4c4c6a;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  @media screen and (max-device-width: 400px) {
    width: 100vw;
    height: 100vh;
  }

  .efeito {
    position: absolute;
    background-color: #000000d9;
    width: 100%;
    height: 100%;
  }

  .pulse {
    display: flex;
    height: 50px;
    animation: pulse 0.7s infinite;
    margin: 0 auto;
    animation-direction: alternate;
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -webkit-filter: brightness(100%);
      -webkit-animation-duration: 1s;
    }
    100% {
      -webkit-transform: scale(1);
      -webkit-filter: brightness(200%);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(2);
      filter: brightness(100%);
    }
    100% {
      transform: scale(1.1);
      filter: brightness(200%);
    }
  }
`;
