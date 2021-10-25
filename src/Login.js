import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";


function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
            .then((person) => {
                console.log(person)
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: person.user
                })
                console.log(person.user.displayName)
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type='submit' onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
