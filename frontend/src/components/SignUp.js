import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
                                if (user) {
                                    history.push('/')
                                }
                            })
        return unsubscribe;
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            let res = await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)      
            console.log("Returns: ", res);
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
