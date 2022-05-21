import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import UsersPage from './components/Users/UsersPage';
import {useState} from "react";
import LoggedInChecker from "./components/Login/LoggedInChecker";
import NavBar from "./components/NavBar";
import ContentPage from "./components/Content/ContentPage";
function App() {
    const [token, setToken] = useState('');

    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login setToken={setToken}/>} />
                    {/*<Route exact path="/dashboard"
                            element={<LoggedInChecker component={<UsersPage/>} token={token}/>}/>
                    */}
                    <Route exact path="/dashboard" element={<LoggedInChecker component={<NavBar setToken={setToken}/>} token={token}/>}/>
                    <Route exact path="/users" element={<LoggedInChecker component={<UsersPage setToken={setToken}/>} token={token}/>}/>
                    <Route exact path="/content" element={<LoggedInChecker component={<ContentPage/>} token={token}/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;
