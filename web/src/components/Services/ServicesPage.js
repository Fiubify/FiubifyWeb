import {useNavigate} from "react-router-dom";
import {Box, Button, TextField, Toolbar} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {ServicesTable} from "./ServicesTable";
import {useState} from "react";


export function ServicesPage({token}) {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [textOfField, setTextOfField] = useState("");

    return (<div>
        <div style={{marginBottom: 1}}>
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
                    startIcon={<ArrowBackIosIcon/>}
                    sx={{color: "white"}}
                ></Button>
                Services
            </Toolbar>
        </div>
        <TextField placeholder="Search by name..." value={textOfField} onChange={(e) => setTextOfField(e.target.value)}/>
        <Button variant="contained" onClick={() => {
            setSearchText(textOfField);
        }} >Search</Button>
        <Box sx={{width: "100%", typography: "body1"}}>
            <ServicesTable token={token} filter={searchText}/>
        </Box>
    </div>);

}
