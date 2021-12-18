import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";
import PetForm from "./PetForm";

const AddPet = (props) => {
  const [newPet, setNewPet] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    petSkills: ["", "", ""],
  });
  const [errors, setErrors] = useState([]);

  const postNewPet = (newPet) => {
    axios
      .post("http://localhost:8000/pets/new", newPet)
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
        pet={newPet}
        setPet={setNewPet}
        onSubmitForm={postNewPet}
        errors={errors}
        action="Add Pet"
      ></PetForm>
    </>
  );
};

export default AddPet;
