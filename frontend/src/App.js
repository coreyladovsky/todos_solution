import React from 'react';
import './App.css';
import TodoMain from './components/TodoMain';
import Home from './components/Home'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom';
import Login from './components/Login';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <NavBar />
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/todos">
        <TodoMain />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </AuthProvider>
    </div>
  );
}

export default App;
