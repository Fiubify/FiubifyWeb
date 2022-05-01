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

  const handleBlockUser = async (id) => {
    const response = await fetch(
      `https://fiubify-middleware-staging.herokuapp.com/user/block/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response);

    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.disabled = true;
        }

        return user;
      })
    );
  };

  const handleUnblockUser = async (id) => {
    const response = await fetch(
      `https://fiubify-middleware-staging.herokuapp.com/user/unblock/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response);

    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.disabled = false;
        }

        return user;
      })
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Uid</th>
          <th>Email</th>
          <th>Role</th>
          <th>Blocked?</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => UserRow(user, handleBlockUser, handleUnblockUser))}
      </tbody>
    </table>
  );
}
