import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//     offset: theme.mixins.toolbar,
// }))

function NavBar() {
    const navigate = useNavigate();

    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Fiubify
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button onClick={() => navigate("/users")} sx={{ my: 2, color: 'white', display: 'block' }}>Users</Button>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Content</Button>
                </Box>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    </Box>);
}

export default NavBar;