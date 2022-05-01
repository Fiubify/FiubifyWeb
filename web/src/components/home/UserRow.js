import PropTypes from 'prop-types';

function UserRow(
  { _id, uid, email, role, disabled },
  handleBlockUser,
  handleUnblockUser
) {
  const buttonText = disabled ? 'Unblock' : 'Block';
  const buttonAction = disabled ? handleUnblockUser : handleBlockUser;

  return (
    <tr>
      <td>{_id}</td>
      <td>{uid}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{String(disabled)}</td>
      <td>
        <button onClick={() => buttonAction(_id)}>{buttonText}</button>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
  }),
  handleBlockUser: PropTypes.func.isRequired,
  handleUnblockUser: PropTypes.func.isRequired,
};

export default UserRow;
