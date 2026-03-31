import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [GeregistreerdePersonen, setGeregistreerdePersonen] = useState([
    "Karel",
    "Els",
    "Piet",
  ]); // ik maak een useState van mijn array zodat ik hem kan aanpassen.

  return (
    <div>
      <RegistrationForm
        onRegister={(naam: string) => { // hier maak ik gebruik van de vooraf gemaakte prop functie die ervoor zorgt dat ik het gegeven van het invulveld terug krijg
          setGeregistreerdePersonen([...GeregistreerdePersonen, naam]); // met deze zin code voeg ik de ingevulde naam toe aan de array die gegeven werd.
          console.log(GeregistreerdePersonen); // hier wil ik een log van de array waarbij er iets aan werd toegevoegd.
        }}
      />
      <hr />
      { <UserList users={GeregistreerdePersonen} /> /* hier geef ik aan mijn prop users de gevraagde array mee*/}
    </div>
  );
}
