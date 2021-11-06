import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

//bootstrap
import { Container } from 'react-bootstrap'


//context hook
import { useAuth } from './contexts/AuthContext'


function App() {
  const { currentUser } = useAuth();

  return (
      <Container className='d-flex flex-column align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}
      >
        <Routes>
          <Route exact path="/" element={currentUser == null ? <Navigate to='/login'/> : <Dashboard/>}/>
          <Route path='/cadastro' element={<SignUp/>}/>
          <Route path='/login' element={currentUser != null ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/esqueci-senha' element={currentUser != null ? <Navigate to='/'/> : <ForgotPassword/>}/>
          <Route path='/update-profile' element={currentUser == null ? <Navigate to='/login'/> : <UpdateProfile/>}/>

          {/* CRIAR LOGGED ROUTE COMPONENT E UPDATE PROFILE */}

        </Routes>
      </Container>
  );
}

export default App;
