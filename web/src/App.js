import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import UsersPage from './components/Users/UsersPage';
import {useState} from "react";
import LoggedInChecker from "./components/Login/LoggedInChecker";
import HomeNavBar from "./components/NavBars/HomeNavBar";

function App() {
    const [token, setToken] = useState('');

    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login setToken={setToken}/>} />
                    <Route exact path="/dashboard" element={<LoggedInChecker component={<HomeNavBar setToken={setToken}/>} token={token}/>}/>
                    <Route exact path="/users" element={<LoggedInChecker component={<UsersPage setToken={setToken}/>} token={token}/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;
