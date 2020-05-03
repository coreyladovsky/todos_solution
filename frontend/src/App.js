import React from 'react';
import './App.css';
import TodoMain from './components/TodoMain';
import Home from './components/Home'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
