const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: [true, "Please enter the pet's name"],
    minLength: [3, "Pet's name must be at least 3 characters long"],
  },
  petType: {
    type: String,
    required: [true, "Please enter the pet's type"],
    minLength: [3, "Pet's type must be at least 2 characters long"],
  },
  petDescription: {
    type: String,
    required: [true, "Please enter the pet's description"],
    minLength: [3, "Pet's description must be at least 2 characters long"],
  },
  petSkills: {
    type: [
      {
        type: String,
      },
    ],
    validate: [petSkillLimit, `{VALUE} exceeds the pet skill limit of 3`],
  },
});

function petSkillLimit(skills) {
  return skills.length <= 3;
}

module.exports = mongoose.model("Pet", PetSchema);
