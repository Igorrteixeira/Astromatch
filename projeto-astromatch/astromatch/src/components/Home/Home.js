import axios from "axios";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { VscClose } from "react-icons/vsc";
import Swal from "sweetalert2";
import { Loading } from "../loading/Loading";
import TinderCard from "react-tinder-card";

export const Home = () => {
  const [pessoa, setPessoa] = useState({});
  const [removeLoading, setRemoveLoading] = useState(false);

  //---------------------- RENDERIZAÇÃO --------------------

  useEffect(() => {
    setTimeout(() => {
      getProfileToChoose();
    }, 1500);
  }, []);

  // useEffect(() => {}, [pessoa]);

  //---------------- VER NOVAS PESSOAS --------------------

  const getProfileToChoose = () => {
    setRemoveLoading(false);

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igorr/person"
      )
      .then((res) => {
        setPessoa(res.data.profile || {});
        setRemoveLoading(true);
        console.log(res.data.profile);
      })
      .catch((error) => {
        console.log("error", error.response || []);
      });
  };
  //-------------------- RECEBE ID E CHOICE ---------------------------
  const ChoosePerson = (parametro) => {
    setRemoveLoading(false);

    const body = { id: pessoa.id, choice: parametro };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/choose-person",
        body
      )
      .then((res) => {
        console.log("oi");
        getProfileToChoose();
        console.log(res.data.isMatch);
        if (res.data.isMatch === true) {
          Swal.fire({
            title: "Match!!",
            text: `Você deu match com ${pessoa.name} .`,
            imageUrl: `${pessoa.photo}`,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: `${pessoa.photo_alt}`,
            confirmButtonColor: " #e35a76",
            confirmButtonText: "&#9829",
          });
        }
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  //-----------------Swiped da imagem
  const [dir, setDir] = useState([]);
  const swiped = (direction, nameToDelete) => {
    setDir(direction);
    console.log(direction);
    if (direction == "right" || direction == "up") {
      ChoosePerson(true);
    } else if (direction == "left" || direction == "down") {
      ChoosePerson(false);
    }
  };

  //----------------------------

  return (
    <Container>
      <div className="fundo">
      <TinderCard
        className="swipe"
        key={pessoa.name}
        onSwipe={(dir) => swiped(dir, pessoa.name)}
      >
        <div className="containerCard">
          <div className="foto">
            <img src={pessoa.photo} alt={pessoa.photo_alt} />
          </div>
          <div className="name-age">
            <div>
              <h2>{pessoa.name},</h2>
              <strong>
                <p>{pessoa.age}</p>
              </strong>
            </div>
            <div>
              <p>{pessoa.bio}</p>
            </div>
          </div>
        </div>
      </TinderCard>
      
      </div>
      <div className="botoes">
      <button
          onClick={() => {
            ChoosePerson(false);
          }}
        >
          <VscClose fontSize="44px" color="red" />
        </button>
        <button
          onClick={() => {
            ChoosePerson(true);
          }}
        >
          <FcLike fontSize="44px" color="red" />
        </button>
        </div>
      
      
      

      {!removeLoading && <Loading />}
    </Container>
  );
};
