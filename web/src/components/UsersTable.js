import {useEffect, useState} from "react";

export default function UsersTable() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function usersComingHome() {
            const response = await fetch("https://fiubify-middleware-staging.herokuapp.com/user/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const responseInJson = await response.json()
            setUsers(responseInJson.data.users)
        }
        usersComingHome()
        const interval = setInterval(() => {
            usersComingHome()
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
