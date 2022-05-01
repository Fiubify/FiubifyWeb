import PropTypes from 'prop-types';

export default function UserRow({ user, handleBlockUser, handleUnblockUser }) {
  const { _id, uid, email, role, disabled } = user;
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
    _id: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
  }).isRequired,
  handleBlockUser: PropTypes.func.isRequired,
  handleUnblockUser: PropTypes.func.isRequired,
};
