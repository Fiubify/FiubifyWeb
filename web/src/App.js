//import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UsersTable from "./components/UsersTable";
import {useState} from "react";
import LoggedInChecker from "./components/LoggedInChecker";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login setLoggedIn={setLoggedIn} setToken={setToken}/>} />
                    <Route exact path="/dashboard" element={<LoggedInChecker component={<UsersTable/>} loggedIn={loggedIn}/>} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;


{/*import
    './App.css';
import
    UsersTable
    from
    "./components/UsersTable";
import
    LogInPage
    from
    "./components/LogInPage";
import
    {
        useState
    }
    from
    "react";
import
    {
        BrowserRouter
        as
        Router, Route, Routes
    }
    from
    "react-router-dom";
import
    Login
    from
    "./components/Login";

    function App() {
        {
        const [logged, setLogged] = useState(false);
        if (logged) {
            return <UsersTable/>
        } else {
            return <LogInPage logIn={setLogged}/>
        }

        }

        return <Login/>
    }

export default
    App;
*/}