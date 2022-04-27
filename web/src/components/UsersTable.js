import {useEffect, useState} from "react";

export default function UsersTable() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function aux() {
            const response = await fetch("https://fiubify-middleware-staging.herokuapp.com/user/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const responseInJson = await response.json()
            setUsers(responseInJson.data.users)
        }
        aux()
        const interval = setInterval(() => {
            aux()
        }, 6000);
        return () => clearInterval(interval);
    }, [])

    return <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => {
            return <tr>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.uid}</td>
                <td>{user.role}</td>
            </tr>
        })}
        </tbody>
    </table>
}
