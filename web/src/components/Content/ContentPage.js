import {useState} from "react";
import {Box, Button, Divider, Tab, Toolbar} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";
import SongsTable from "./SongsTable";
import AlbumsTable from "./AlbumsTable";

export default function ContentPage() {
    const navigate = useNavigate();
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<div>
        <div>
            <Toolbar>
                <Button onClick={() => navigate("/dashboard")} startIcon={<ArrowBackIosIcon/>}></Button>
            </Toolbar>
        </div>
        <Divider/>
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Songs" value="1" />
                        <Tab label="Albums" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><SongsTable/></TabPanel>
                <TabPanel value="2"><AlbumsTable/></TabPanel>
                {/*<TabPanel value="3">Playlists</TabPanel>*/}
            </TabContext>
        </Box>
    </div>);
}