import { TableCell, TableRow, Chip } from "@mui/material";
import ButtonWithLoading from "../Buttons/ButtonWithLoading";

import PropTypes from "prop-types";

export default function UserRow({
  user,
  handleBlockUser,
  handleUnblockUser,
  turnOnPopup,
  setUserProfile,
}) {
  const { _id, uid, email, role, disabled } = user;
  const buttonText = disabled ? "Unblock" : "Block";
  const buttonAction = disabled ? handleUnblockUser : handleBlockUser;

  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }} color="info">
        <p
          onClick={() => {
            turnOnPopup(true);
            setUserProfile(user);
          }}
        >
          {_id}
        </p>
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{uid}</TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>{email}</TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }}>
        <Chip
          sx={{ backgroundColor: "#006e95" }}
          color="info"
          label={role}
        ></Chip>
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }} role={"status"}>
        <Chip
          color={disabled ? "error" : "success"}
          label={String(disabled).toUpperCase()}
        />
      </TableCell>
      <TableCell sx={{ borderBottom: "2px solid #006e95" }} align="center">
        <ButtonWithLoading
          variant={"contained"}
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
