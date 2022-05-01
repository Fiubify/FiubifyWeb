import UserRow from './UserRow';
import PropTypes from 'prop-types';

export default function UsersTable({
  users,
  handleBlockUser,
  handleUnblockUser,
}) {
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
        {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
            handleBlockUser={handleBlockUser}
            handleUnblockUser={handleUnblockUser}
          />
        ))}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      uid: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  handleBlockUser: PropTypes.func.isRequired,
  handleUnblockUser: PropTypes.func.isRequired,
};
