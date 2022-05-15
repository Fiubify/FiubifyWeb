import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth, logInWithEmailAndPassword} from "./../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import "./Login.css";
import {signOut} from "firebase/auth";

function Login({setLoggedIn, setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            /*try {
                validateAdmin(user.getIdToken())//refresca el token si expiro
                    .then((status) => {
                        if (status === 200) {
                            setToken(user);
                            setLoggedIn(true);
                            navigate("/dashboard");
                        } else {
                            //mostrar pantalla de "acceso no disponible a no-admin-users"
                            console.log("No es admin");
                            console.log("status: ", response.status);
                            useNavigate("/");
                        }
                }).catch((error) => {
                    console.log(error);
                });
            } catch(e) {
                console.log(e);
            }*/
            user.getIdToken()//refresca el token si expiro
                .then((token) => {
                    fetch("https://fiubify-middleware-staging.herokuapp.com/auth/validate/admin", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: {
                            token: token
                        }
                    }).then((response) => {
                        if (response.status === 200) {
                            setToken(user);
                            setLoggedIn(true);
                            navigate("/dashboard");
                        } else {
                            //mostrar pantalla de "acceso no disponible a no-admin-users"
                            signOut(auth).then(()=>{
                                console.log("No es admin");
                                console.log("status: ", response.status);
                                navigate("/");
                            }).catch((error)=>{
                                console.log(error);
                            })
                        }
                    })
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .catch((error) => {
                    console.log(error);
                })

        }
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;