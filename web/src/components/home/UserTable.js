import UserRow from './UserRow';
import { useEffect, useState } from 'react';

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch(
      'https://fiubify-middleware-staging.herokuapp.com/user/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const fetchResponse = await response.json();
    console.log(fetchResponse);
    setUsers(fetchResponse.data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Uid</th>
          <th>Email</th>
          <th>Role</th>
          <th>Disabled?</th>
        </tr>
      </thead>
      <tbody>{users.map((user) => UserRow(user))}</tbody>
    </table>
  );
}
