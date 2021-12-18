const Pet = require("../models/pet.models");

module.exports.addPet = (request, response) => {
  Pet.create(request.body)
    .then((author) => response.json(author))
    .catch((error) => response.status(400).json(error));
};

module.exports.getAllPets = (request, response) => {
  Pet.find({})
    .collation({ locale: "en", strength: 2 })
    .sort({ petType: 1 })
    .then((pets) => response.json(pets))
    .catch((error) => response.json(error));
};

module.exports.getPet = (request, response) => {
  Pet.findOne({ _id: request.params.id })
    .then((pet) => {
      response.json(pet);
    })
    .catch((error) => response.status(400).json(error));
};

module.exports.updatePet = (request, response) => {
  Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => response.json(updatedPet))
    .catch((error) => response.status(400).json(error));
};

module.exports.adoptPet = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((deletedConfirmation) => response.json(deletedConfirmation))
    .catch((error) => response.json(error));
};
