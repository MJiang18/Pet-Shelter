import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { navigate } from "@reach/router";

const AdoptPet = (props) => {
  const { id, adoptFilter, pet } = props;

  const adoptionHandler = (e) => {
    axios
      .delete(`http://localhost:8000/pets/${id}`)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Button
      className="adopt-btn"
      variant="danger"
      className="btn"
      onClick={adoptionHandler}
    >
      Adopt {pet.petName}
    </Button>
  );
};

export default AdoptPet;
