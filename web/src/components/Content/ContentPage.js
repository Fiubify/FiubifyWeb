import { useState } from "react";
import { Box, Button, Tab, Toolbar } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import SongsTable from "./SongsTable";
import AlbumsTable from "./AlbumsTable";
import PlaylistsTable from "./PlaylistsTable";

export default function ContentPage({token}) {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          CONTENT
        </Toolbar>
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              width: "100%",
              borderBottom: "2px solid #006e95",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TabList
              sx={{
                width: "75%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                sx={{
                  width: "33%",
                  color: "#006e95",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#006e95", color: "white" },
                }}
                label="Songs"
                value="1"
              />
              <Tab
                sx={{
                  width: "33%",
                  color: "#006e95",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#006e95", color: "white" },
                }}
                label="Albums"
                value="2"
              />
              <Tab
                sx={{
                  width: "33%",
                  color: "#006e95",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#006e95", color: "white" },
                }}
                label="Playlists"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: 0 }} value="1">
            <SongsTable token={token}/>
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="2">
            <AlbumsTable />
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="3">
            <PlaylistsTable />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
