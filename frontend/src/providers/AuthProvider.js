import React, { createContext, useEffect, useState } from 'react';
import firebase from '../firebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);

    const getFirebaseIdToken = async () => {
        try {
            const token = await firebase
                              .auth()
                              .currentUser.getIdToken(false)
            setToken(token);   
        } catch (error) {
            console.error(error);
        }
    };

     useEffect(() => {
         setLoading(true)
       const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
         if (user) {
                 const { email, uid } = user;
                 const lastLogin = user.metadata.lastSignInTime;
           setCurrentUser({ email, uid, lastLogin });
            getFirebaseIdToken().then(() => {
                setLoading(false)
            })
         } else {
           setCurrentUser(null);
           setLoading(false)
         }
       });
       return unsubscribe;
     }, []);

     const logout = () => {
       firebase.auth().signOut();
     };

      if(loading) return <div>Loading...</div>

    return(
        <AuthContext.Provider value={{currentUser, logout, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
