import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import Name from "./components/Name.js";
import EditPost from "./components/EditPost.js";

//context hook
import { useAuth } from './contexts/AuthContext'
import { useDB } from './contexts/DBContext'

function App() {
  const { currentUser } = useAuth();
  const { posts } = useDB();

  return (
      <Routes>
        
        <Route exact path="/" element={currentUser == null ? <Navigate to='/login'/> : <Dashboard/>}/>
        
        <Route path='/cadastro' element={<SignUp/>}/>

        <Route path='/nome' element={currentUser == null ? <Navigate to='/login'/> : <Name/>}/>
        
        <Route path='/login' element={currentUser != null ? <Navigate to='/'/> : <Login/>}/>
        
        <Route path='/esqueci-senha' element={currentUser != null ? <Navigate to='/'/> : <ForgotPassword/>}/>
        
        <Route path='/update-profile' element={currentUser == null ? <Navigate to='/login'/> : <UpdateProfile/>}/>

        <Route path='/posts' element={currentUser == null ? <Navigate to='/login'/> : <Posts/>}/>

        <Route path='/create-post' element={currentUser == null ? <Navigate to='/login'/> : <CreatePost/>}/>

        {posts.map(post => {
            return <Route path={`/edit/${post.id}`} key={post.id} element={currentUser == null ? <Navigate to='/login'/> : 
            <EditPost 
            postRef={post.id}
            typeValue={post.type}
            infoValue={post.info}
            assignedValue={post.assigned}
            statusValue={post.status}
             />} />
        })}

      </Routes>
    
  );
}

export default App;
