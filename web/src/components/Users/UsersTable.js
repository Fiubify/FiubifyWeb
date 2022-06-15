import {
  TableBody,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UserRow from "./UserRow";

import PropTypes from "prop-types";
import ProfilePopup from "../Popup/ProfilePopup";
import { useState } from "react";

export default function UsersTable({
  users,
  handleBlockUser,
  handleUnblockUser,
}) {
  const [popupOn, setPopupOn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  return (
    <div>
      <div>
        <TableContainer>
          <Table>
            <TableHead
              sx={{ backgroundColor: "#006e95", borderTop: "1px solid white" }}
            >
              <TableRow>
                <TableCell sx={{ color: "white" }}>Id</TableCell>
                <TableCell sx={{ color: "white" }}>Uid</TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                <TableCell sx={{ color: "white" }}>Role</TableCell>
                <TableCell sx={{ color: "white" }}>Blocked?</TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Operation
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <UserRow
                  key={user._id}
                  user={user}
                  handleBlockUser={handleBlockUser}
                  handleUnblockUser={handleUnblockUser}
                  turnOnPopup={setPopupOn}
                  setUserProfile={setUserProfile}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <ProfilePopup
        trigger={popupOn}
        setTrigger={setPopupOn}
        user={userProfile}
      ></ProfilePopup>
    </div>
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
