import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/util';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const API = apiURL();
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            let res = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            await axios.post(`${API}/users`, {id: res.user.uid, email});      
        } catch (err){
            // const { message } = err;
            console.log("ERROR ", err)
            // this.setState({ error: message });
        };
    }
    
    return(
        <div>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setEmail(e.target.value)} placeholder="Email" value={email}/>
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" value={password}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};


    // useEffect(() => {
    //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //                             if (user) {
    //                                 history.push('/')
    //                             }
    //                         })
    //     return unsubscribe;
    // }, [])