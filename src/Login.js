import { Link } from "react-router-dom";
import React from 'react'
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/")
            })
            .catch(error => alert(error.message))

        // some fancy firebase login shittt...
    }

    const register = e => {
        e.preventDefault()
        // do some fancy firebase register
        auth    
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                    // it successfully created a new user with 
                    // email and password
                if (auth) {
                    navigate("/")
                }
            })
            .catch(error => alert(error.message)) 
                
            // do some fancy firebase register things    
    }


  return (
    <div className="login">
        <Link to="/">    
            <img
                className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            />   
        </Link> 

        <div className="login__container">
            <h2>Sign in</h2>
            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange=
                 {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange=
                {e => setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn}
                    className="login__signInButton">Sign In
                </button>
            </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

               
                <button onClick={register}
                className="login__registerButton">Create Your Amazon Account</button>
            

        </div>



    </div>
  )
}

export default Login;