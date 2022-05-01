import {
  TableBody,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import UserRow from './UserRow';

import PropTypes from 'prop-types';

export default function UsersTable({
  users,
  handleBlockUser,
  handleUnblockUser,
}) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Uid</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Blocked?</TableCell>
            <TableCell>Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              handleBlockUser={handleBlockUser}
              handleUnblockUser={handleUnblockUser}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
