import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [GeregistreerdePersonen, setGeregistreerdePersonen] = useState([
    "Karel",
    "Els",
    "Piet",
  ]);

  return (
    <div>
      <RegistrationForm
        onRegister={(naam: string) => {
          setGeregistreerdePersonen([...GeregistreerdePersonen, naam]);
          console.log(GeregistreerdePersonen);
        }}
      />
      <hr />
      { <UserList users={GeregistreerdePersonen} /> /* hier geef ik aan mijn prop users de gevraagde array mee*/}
    </div>
  );
}
