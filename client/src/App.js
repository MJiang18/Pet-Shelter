import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import AddPet from "./components/AddPet";
import PetDetail from "./components/PetDetail";
import UpdatePet from "./views/UpdatePet";

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"></Main>
        <AddPet path="/pets/new"></AddPet>
        <PetDetail path="/pets/:id"></PetDetail>
        <UpdatePet path="/pets/:id/edit"></UpdatePet>
      </Router>
    </div>
  );
}

export default App;
