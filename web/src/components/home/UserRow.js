import PropTypes from 'prop-types';

export default function UserRow({ id, uid, email, role, blocked }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{uid}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{String(blocked)}</td>
    </tr>
  );
}

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  blocked: PropTypes.bool.isRequired,
};
