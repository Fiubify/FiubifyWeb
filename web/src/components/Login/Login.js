import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Login.css";
import { signOut } from "firebase/auth";
// import ErrPopup from "../Popup/ErrPopup";
// import Popup from "reactjs-popup";
import Logo from "./../../assets/logo.png";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [popupTrigger, setPopupTrigger] = useState(false);
  // const [open, setOpen] = useState(false);
  // const closeModal = () => setOpen(false);
  // const [errStatus, setErrStatus] = useState(0);
  // const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    logInWithEmailAndPassword(email, password)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            user
              .getIdToken() //refresca el token si expiro
              .then((token) => {
                fetch(
                  "https://fiubify-middleware-staging.herokuapp.com/auth/validate/admin",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      token: `${token}`,
                    }),
                  }
                )
                  .then((response) => {
                    if (response.status === 200) {
                      setToken(token);
                      navigate("/dashboard");
                    } else {
                      signOut(auth)
                        .then(() => {
                          // setErrMsg("No Admin Account");
                          // setErrStatus(response.status);
                          // setOpen(true);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            console.log("user logged out");
          }
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <img className="logo-img" src={Logo} alt="Logo" />
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
          onClick={() => {
            handleClick();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
