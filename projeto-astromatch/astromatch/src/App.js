import {Home} from "../src/components/Home/Home"
import { Header } from "./components/header/Header";
import styled from "styled-components";
import { useState } from "react";
import { Matches } from "./components/Matches/Matches";




const Container = styled.div`
  margin:10px auto;
  border: 1px solid;
  width:400px;
  height:600px;
  border-radius:10px;
  background-image: linear-gradient(#E94D62,#eb6b58 ,#f2755a , #e79950,#f3bb86);
  

  @media screen and (min-device-width : 320px)  and (max-device-width : 400px) {
    width:100vw;
    height: 100vh;
    margin:0px auto;
    border-radius: 0px;
    border: none;
}

`

function App() {
  const [pagina,setPagina] = useState("home")

const TrocaPagina =()=>{
    switch (pagina) {
        case "home":
        return <Home/>
        case "matches":
        return <Matches/>
        default:
            return <div>Erro</div>
    }
}
const irParaHome =()=>{
    setPagina("home")
}
const irParaMatche =() =>{
    setPagina("matches")
}

  return (
    <Container>
     <Header
     home={irParaHome}
     matches={irParaMatche}
     />
    
      {TrocaPagina()}
    </Container>

  );
}

export default App;
