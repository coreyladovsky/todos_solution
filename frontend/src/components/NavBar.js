import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../firebase';

export default function NavBar() {
    const [user, setUser] = useState(null);
       useEffect(() => {
         const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
           if (user) {
               debugger
             setUser(user)
           } else {
               setUser(null)
           }
         });
         return unsubscribe;
       });

    const logout = () => {
        firebase.auth().signOut();
    }

    return (
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div>
            <NavLink to={"/signup"}>Sign Up</NavLink>
            <NavLink to={"/login"}>Log In</NavLink>
          </div>
        )}
      </nav>
    );
};
