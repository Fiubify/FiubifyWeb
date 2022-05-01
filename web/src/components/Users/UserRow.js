import { TableCell, TableRow } from '@mui/material';
import ButtonWithLoading from '../Buttons/ButtonWithLoading';

import PropTypes from 'prop-types';

export default function UserRow({ user, handleBlockUser, handleUnblockUser }) {
  const { _id, uid, email, role, disabled } = user;
  const buttonText = disabled ? 'Unblock' : 'Block';
  const buttonAction = disabled ? handleUnblockUser : handleBlockUser;

  return (
    <TableRow>
      <TableCell>{_id}</TableCell>
      <TableCell>{uid}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{String(disabled)}</TableCell>
      <TableCell align='center'>
        <ButtonWithLoading
          variant={'contained'}
          onClickHandler={() => buttonAction(_id)}
        >
          {buttonText}
        </ButtonWithLoading>
      </TableCell>
    </TableRow>
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
