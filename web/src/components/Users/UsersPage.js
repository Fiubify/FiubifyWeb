import { useEffect, useState } from "react";

import UsersTable from "./UsersTable";
import StatusBar from "../StatusBar/StatusBar";
import { blockUser, unblockUser, getUsers } from "../../utils/api/usersApi";
import { Button, Divider, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function UsersPage({ token }) {
  const [users, setUsers] = useState([]);
  const [apiActions, setApiAction] = useState([]);
  const navigate = useNavigate();

  async function fetchUsers() {
    const apiResponse = await getUsers();
    setUsers(apiResponse.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlockUser = async (id) => {
    const response = await blockUser(id, token);

    if (response.ok) {
      setUsers(
        users.map((user) => {
          if (user._id === id) {
            user.disabled = true;
          }

          return user;
        })
      );
      handleApiAction("ok", `Succesfully blocked user ${id}`);
    } else {
      handleApiAction("error", `Error when trying to block user ${id}`);
    }
  };

  const handleUnblockUser = async (id) => {
    const response = await unblockUser(id, token);

    if (response.ok) {
      setUsers(
        users.map((user) => {
          if (user._id === id) {
            user.disabled = false;
          }

          return user;
        })
      );
      handleApiAction("ok", `Succesfully unblocked user ${id}`);
    } else {
      handleApiAction("error", `Error when trying to unblock user ${id}`);
    }
  };

  const handleApiAction = (type, message) => {
    setApiAction([{ type: type, msg: message }]);
  };

  return (
    <div>
      <div>
        <Toolbar
          sx={{
            backgroundColor: "#006e95",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            fontWeight: "bold",
            paddingRight: "5%",
          }}
        >
          <Button
            onClick={() => navigate("/dashboard")}
            startIcon={<ArrowBackIosIcon />}
            sx={{ color: "white" }}
          ></Button>
          USERS
        </Toolbar>
      </div>
      <StatusBar actions={apiActions} />
      <UsersTable
        users={users}
        handleBlockUser={handleBlockUser}
        handleUnblockUser={handleUnblockUser}
      />
    </div>
  );
}
