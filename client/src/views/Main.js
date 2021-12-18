import React, { useState } from "react";
import PetList from "../components/PetList";
import { Link } from "@reach/router";

const Main = () => {
  const [pets, setPets] = useState([]);

  return (
    <div className="container">
      <div className="header-row">
        <h1>Pet Shelter</h1>
        <Link className="addPetLink" to="/pets/new">
          add a pet to the shelter
        </Link>
      </div>
      <p>These pets are looking for a good home</p>
      <PetList pets={pets} setPets={setPets}></PetList>
    </div>
  );
};

export default Main;
