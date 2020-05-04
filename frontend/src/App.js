import React from 'react';
import './App.css';
import TodoMain from './components/TodoMain';
import Home from './components/Home'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom';
import Login from './components/Login';
import AuthProvider from './providers/AuthProvider';
import { ProtectedRoute , AuthRoute } from './util/auth_util';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <NavBar />
      <AuthRoute exact path="/signup">
        <SignUp />
      </AuthRoute>
      <AuthRoute exact path="/login">
        <Login />
      </AuthRoute>
      <ProtectedRoute exact path="/todos">
        <TodoMain />
      </ProtectedRoute>
      <Route exact path="/">
        <Home />
      </Route>
    </AuthProvider>
    </div>
  );
}

export default App;
