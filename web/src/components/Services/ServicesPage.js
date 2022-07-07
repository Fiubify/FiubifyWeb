import {useNavigate} from "react-router-dom";
import {
    Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const services = [{
    title: "Streamable Contents",
    technologies: "Javascript, Express, jest, mongodb",
    description: "It manages all the albums, songs, playlists and song favourites"
}, {
    title: "Payments",
    technologies: "Python, FastAPI, mongodb",
    description: "It manages all the transactions and resources to make them."
}, {
    title: "Mobile",
    technologies: "React native, Firebase, Android, Javascript",
    description: "Main mobile application, where users have contact with the Spotifiuby experience"
}, {
    title: "Metrics",
    technologies: "Javascript, Express, jest, mongodb",
    description: "It manages all the metrics to show the administrator all the data analysis shown in the web page"
}, {
    title: "Users",
    technologies: "Javascript, Express, jest, mongodb",
    description: "It manages all the information about users, including mobile users (listeners and artists) and admin users"
}, {
    title: "Web",
    technologies: "Javascript, React, jest",
    description: "The web in which an admin can manage the content, view metrics and block and unblock users"
}, {
    title: "Kubernetes Manifests",
    technologies: "Smarty",
    description: "The web in which an admin can manage the content, view metrics and block and unblock users"
}]

function ServicesTable({}) {
    return <div style={{width: "100%"}}>
        <TableContainer sx={{width: "100%"}}>
            <Table>
                <TableHead sx={{backgroundColor: "#006e95"}}>
                    <TableRow>
                        <TableCell sx={{color: "white"}}>Service</TableCell>
                        <TableCell sx={{color: "white"}}>Technologies</TableCell>
                        <TableCell sx={{color: "white"}}>Purpose</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service) => <TableRow key={service.title}>
                        <TableCell sx={{borderBottom: "2px solid #006e95"}}><h2>{service.title}</h2></TableCell>
                        <TableCell sx={{borderBottom: "2px solid #006e95"}}>{service.technologies}</TableCell>
                        <TableCell sx={{borderBottom: "2px solid #006e95"}}>{service.description}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
}


export function ServicesPage({token}) {
    const navigate = useNavigate();

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
        <Box sx={{width: "100%", typography: "body1"}}>
            <ServicesTable token={token}/>
        </Box>
    </div>);

}
