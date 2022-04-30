import UserRow from './UserRow';

export default function UsersTable() {
  const users = [{ id: 1, uid: 2, email: 'Roberto', role: 'Admin' }];

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Uid</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>{users.map((user) => UserRow(user))}</tbody>
    </table>
  );
}
