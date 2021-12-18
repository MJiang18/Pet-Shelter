import React from "react";
import Table from "react-bootstrap/Table";
import AdoptPet from "./AdoptPet";
import { Link } from "@reach/router";

const PetDetail = (props) => {
  const { pet } = props.location.state;

  return (
    <div className="container">
      <div className="header-row">
        <h1>Pet Shelter</h1>
        <Link to={"/"}>back to home</Link>
      </div>
      <div className="details-row">
        <p>Details about {pet.petName}</p>
        <AdoptPet id={pet._id} pet={pet}></AdoptPet>
      </div>
      <Table className="pet-detail" borderless>
        <tbody>
          <tr>
            <td>
              <strong>Pet Type:</strong>
            </td>
            <td>{pet.petType}</td>
          </tr>
          <tr>
            <td>
              <strong>Description:</strong>
            </td>
            <td>{pet.petDescription}</td>
          </tr>
          <tr>
            <td>
              <strong>Skills:</strong>
            </td>
            <td>
              <ul className="petSkills">
                <li>{pet.petSkills[0]}</li>
                <li>{pet.petSkills[1]}</li>
                <li>{pet.petSkills[2]}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PetDetail;
