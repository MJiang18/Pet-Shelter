import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import PetForm from "../components/PetForm";

const UpdatePet = (props) => {
  const [updatedPet, setUpdatedPet] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    petSkills: ["", "", ""],
  });

  const [errors, setErrors] = useState([]);
  const { id } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/pets/${id}`)
      .then((response) => setUpdatedPet(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const updatePet = (updatedPet) => {
    axios
      .put(`http://localhost:8000/pets/${id}/edit`, updatedPet)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        const errorResponse = error.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <>
      <PetForm
        pet={updatedPet}
        setPet={setUpdatedPet}
        onSubmitForm={updatePet}
        errors={errors}
        action="Edit Pet"
      ></PetForm>
    </>
  );
};

export default UpdatePet;
