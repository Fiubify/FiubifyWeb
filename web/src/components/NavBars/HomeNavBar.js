import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";
import Logo from "./../../assets/logo.png";
import {TbLogout} from "react-icons/tb";
import {ContentMetricsGraphs} from "../MetricsVisualization/Content/ContentMetricsGraphs";
import {UserMetricsGraphs} from "../MetricsVisualization/Users/UserMetricsGraphs";

function HomeNavBar({setToken}) {
    const navigate = useNavigate();

    // useEffect(() => {
    //     getAllContentMetrics().then();
    //     getAllUsersMetrics().then();
    // }, [])

    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar sx={{backgroundColor: "#006e95"}} position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50px",
                                backgroundColor: "white",
                                mr: "1%",
                            }}
                        >
                            <img src={Logo} alt="Logo" width="100%"/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            Fiubify
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                onClick={() => navigate("/users")}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    width: "100%",
                                    paddingTop: "5%",
                                    paddingBottom: "5%",
                                    borderRight: "1px solid white",
                                    borderRadius: 0,
                                }}
                            >
                                Users
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                onClick={() => navigate("/contents")}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    width: "100%",
                                    paddingTop: "5%",
                                    paddingBottom: "5%",
                                    borderRight: "1px solid white",
                                    borderRadius: 0,
                                }}
                            >
                                Content
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                margin: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    paddingTop: "5%",
                                    paddingBottom: "5%",
                                    borderRadius: 0,
                                }}
                                onClick={() => {
                                    signOut(auth)
                                        .then(() => {
                                            setToken("");
                                            navigate("/");
                                        })
                                        .catch((error) => {
                                            setToken("");
                                            navigate("/");
                                            console.log(error);
                                        });
                                }}
                            >
                                Logout
                                <TbLogout size={20} style={{marginLeft: "5%"}}/>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <ContentMetricsGraphs/>
            <UserMetricsGraphs/>
        </div>
    );
}

export default HomeNavBar;
