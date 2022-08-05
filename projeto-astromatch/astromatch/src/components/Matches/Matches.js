import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { AiOutlineClear } from "react-icons/ai";
import { Loading } from "../loading/Loading";

export const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  // -------------- RENDERIZAÇÃO -----------------
  useEffect(() => {
    setTimeout(() => {
      getMatches();
    }, 1500);
  }, []);

  // -------------------VER QUEM DEU MATCH ----------------
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
        setRemoveLoading(true);
      })

      .catch((error) => {
        alert(error);
      });
  };
  //---------------------- Limpar match -----------------------------
  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/clear"
      )
      .then(() => {
        getMatches();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const list = matches.map((item) => {
    return (
      <li key={item.id}>
        <img src={item.photo} alt={item.photo_alt} />
        <strong>
          <p>{item.name}</p>
        </strong>
      </li>
    );
  });

  return (
    <Container>
      <ul>
        {matches.length > 0 ? (
          <ul>{list}</ul>
        ) : (
          <h2>Você não possui matches &#128577;</h2>
        )}
      </ul>
      <div className="botoes">
        <button onClick={clear}>
          <AiOutlineClear size="30px" />
        </button>
      </div>
      {!removeLoading && <Loading />}
    </Container>
  );
};
