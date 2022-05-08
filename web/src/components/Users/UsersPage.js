import { useEffect, useState } from 'react';

import UsersTable from './UsersTable';
import StatusBar from '../StatusBar/StatusBar';
import { blockUser, unblockUser, getUsers } from '../../utils/api/usersApi';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [apiActions, setApiAction] = useState([]);

  async function fetchUsers() {
    const apiResponse = await getUsers();

    setUsers(apiResponse.data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlockUser = async (id) => {
    const response = await blockUser(id);

    if (response.ok) {
      setUsers(
        users.map((user) => {
          if (user._id === id) {
            user.disabled = true;
          }

          return user;
        })
      );
      handleApiAction('ok', `Succesfully blocked user ${id}`);
    } else {
      handleApiAction('error', `Error when trying to block user ${id}`);
    }
  };

  const handleUnblockUser = async (id) => {
    const response = await unblockUser(id);

    if (response.ok) {
      setUsers(
        users.map((user) => {
          if (user._id === id) {
            user.disabled = false;
          }

          return user;
        })
      );
      handleApiAction('ok', `Succesfully unblocked user ${id}`);
    } else {
      handleApiAction('error', `Error when trying to unblock user ${id}`);
    }
  };

  const handleApiAction = (type, message) => {
    setApiAction([{ type: type, msg: message }]);
  };

  return (
    <div>
      <StatusBar actions={apiActions} />
      <UsersTable
        users={users}
        handleBlockUser={handleBlockUser}
        handleUnblockUser={handleUnblockUser}
      />
    </div>
  );
}
