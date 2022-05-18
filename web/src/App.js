import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UsersPage from './components/Users/UsersPage';
import {useState} from "react";
import LoggedInChecker from "./components/LoggedInChecker";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [_token, setToken] = useState('');

    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login setLoggedIn={setLoggedIn} setToken={setToken}/>} />
                    <Route exact path="/dashboard" element={<LoggedInChecker component={<UsersPage/>} loggedIn={loggedIn}/>} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
