interface Props{
    users: string[]
}



export default function UserList({ users, registeredUsers }: Props) {
    return <>
    <ul>{users.map(user=> <li>{user}</li>)}</ul>
    </>
}