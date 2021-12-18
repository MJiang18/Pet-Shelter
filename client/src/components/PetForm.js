import React from "react";

const PetForm = (props) => {
  const { onSubmitForm, pet, setPet, errors, action } = props;

  const inputHandler = (e) => {
    let newStateObject = { ...pet };
    newStateObject[e.target.name] = e.target.value;
    setPet(newStateObject);
  };

  const petSkillsHandler = (e) => {
    let newStateObject = { ...pet };
    if (e.target.name == "petSkills1") {
      newStateObject.petSkills[0] = e.target.value;
    } else if (e.target.name == "petSkills2") {
      newStateObject.petSkills[1] = e.target.value;
    } else {
      newStateObject.petSkills[2] = e.target.value;
    }
    setPet(newStateObject);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitForm(pet);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        {errors.map((error, index) => (
          <p className="error-msg" key={index}>
            {error}
          </p>
        ))}
        <div className="row">
          <div className="col">
            <p>
              <label>Pet Name</label>
              <br />
              <input
                type="text"
                name="petName"
                value={pet.petName}
                onChange={inputHandler}
              />
              {errors.petName ? <p>{errors.petName.message}</p> : null}
            </p>
            <p>
              <label>Pet Type</label>
              <br />
              <input
                type="text"
                name="petType"
                value={pet.petType}
                onChange={inputHandler}
              />
            </p>
            <p>
              <label>Pet Description</label>
              <br />
              <input
                type="text"
                name="petDescription"
                value={pet.petDescription}
                onChange={inputHandler}
              />
            </p>
            <input className="submit-btn" type="submit" value={action}></input>
          </div>
          <div className="col">
            <p>Skills (optional)</p>
            <p>
              <label>Pet Skills 1</label>
              <br />
              <input
                type="text"
                name="petSkills1"
                value={pet.petSkills[0]}
                onChange={petSkillsHandler}
              />
            </p>
            <p>
              <label>Pet Skills 2</label>
              <br />
              <input
                type="text"
                name="petSkills2"
                value={pet.petSkills[1]}
                onChange={petSkillsHandler}
              />
            </p>
            <p>
              <label>Pet Skills 3</label>
              <br />
              <input
                type="text"
                name="petSkills3"
                value={pet.petSkills[2]}
                onChange={petSkillsHandler}
              />
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PetForm;
