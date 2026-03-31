import "./UserList.css"; // Import van de styling file zodat ze groen of rood kunnen kleuren

interface Props {
  users: string[]; // Met deze prop kan ik een lijst doorgeven met strings (de lijst met de reeds geregistreerde gebruikers)
  registeredUsers: boolean; // ik koos voor het type boolean omdat ik een True/False denk terug te krijgen
}

export default function UserList({ users, registeredUsers }: Props) {
  return (
    <>
      <h2>Geregistreerde Gebruikers:</h2>
      <ul>
        {users.map(
          (
            user, 
          ) => (
            <li>{user}</li> // Hier maak ik mijn lijst aan die weergegeven wordt met de gebruiker die opgegeven is
          ),
        )}
      </ul>
    </>
  );
}
