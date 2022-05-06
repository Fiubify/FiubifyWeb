import {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {logInWithEmailAndPassword} from "../firebase";
signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({user})
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

export default function LogInPage({logIn}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();


    return (
        <form>
            <h5> Log In </h5>
            <input type="text" placeholder="Usuario" onChange={(e)=>{setUsername(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="Contraseña" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" onClick={()=>{logInWithEmailAndPassword(username, password)}}>Enviar</button>
            {/*<button type="submit" onClick={()=>{logIn(true)}}>Enviar</button>*/}
        </form>
    );
}