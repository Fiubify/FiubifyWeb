export default function UserRow({ id, uid, email, role }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{uid}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  );
}
