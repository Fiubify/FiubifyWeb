import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

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

export function ServicesTable({token, filter}) {
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
                    {services.filter((service) => service.title.toLowerCase().includes(filter.toLowerCase())).map((service) => <TableRow key={service.title}>
                        <TableCell sx={{borderBottom: "2px solid #006e95"}}><h2>{service.title}</h2></TableCell>
                        <TableCell sx={{borderBottom: "2px solid #006e95"}}>{service.technologies}</TableCell>
                        <TableCell sx={{borderBottom: "2px solid #006e95"}}>{service.description}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
}
