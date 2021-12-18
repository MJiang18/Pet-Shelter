import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Table from "react-bootstrap/Table";
import AdoptPet from "./AdoptPet";

const PetList = (props) => {
  const { pets, setPets } = props;
  console.log("pets is ", pets);

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((pets) => {
        console.log(pets.data);
        setPets(pets.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const adoptFilter = (id) => {
    let newPets = pets.filter((pet) => pet._id !== id);
    setPets(newPets);
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets
            ? pets.map((pet, index) => (
                <tr key={index}>
                  <td>{pet.petName}</td>
                  <td>{pet.petType}</td>
                  <td>
                    <Link
                      to={`/pets/${pet._id}`}
                      state={{
                        pet: pet,
                      }}
                    >
                      details
                    </Link>{" "}
                    | <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default PetList;
