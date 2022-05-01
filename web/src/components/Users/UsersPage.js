import UsersTable from './UsersTable';

import { blockUser, unblockUser, getUsers } from '../../utils/api/usersApi';

import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const apiResponse = await getUsers();

    console.log(apiResponse);
    setUsers(apiResponse.data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlockUser = async (id) => {
    await blockUser(id);

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
    await unblockUser(id);

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
    <div>
      <UsersTable
        users={users}
        handleBlockUser={handleBlockUser}
        handleUnblockUser={handleUnblockUser}
      />
    </div>
  );
}
