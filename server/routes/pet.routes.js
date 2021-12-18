const PetController = require("../controllers/pet.controller");

module.exports = function (app) {
  app.get("/", PetController.getAllPets);
  app.get("/pets/:id", PetController.getPet);
  app.post("/pets/new", PetController.addPet);
  app.put("/pets/:id/edit", PetController.updatePet);
  app.delete("/pets/:id", PetController.adoptPet);
};
