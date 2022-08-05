import { Container } from "./style";
import { RiUserShared2Fill } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";

export const Header = (props) => {
  return (
    <Container>
      <button onClick={props.home}>
        <RiUserShared2Fill
          size="25px"
          color="white"
          onMouseOver={({ target }) => (target.style.color = "#F5AA61")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        />
      </button>
      <h1>Astromatch</h1>
      <button onClick={props.matches}>
        <GiLovers
          size="25px"
          color="white"
          onMouseOver={({ target }) => (target.style.color = "#F5AA61")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        />
      </button>
    </Container>
  );
};
