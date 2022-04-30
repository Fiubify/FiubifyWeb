import PropTypes from 'prop-types';

function UserRow({ _id, uid, email, role, disabled }) {
  return (
    <tr>
      <td>{_id}</td>
      <td>{uid}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{String(disabled)}</td>
    </tr>
  );
}

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default UserRow;
