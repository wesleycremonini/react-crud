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
        
        <Route exact path="/react-crud/" element={currentUser == null ? <Navigate to='/react-crud/login'/> : <Dashboard/>}/>
        
        <Route path='/react-crud/cadastro' element={<SignUp/>}/>

        <Route path='/react-crud/nome' element={<Name/>}/>
        
        <Route path='/react-crud/login' element={currentUser != null ? <Navigate to='/react-crud/'/> : <Login/>}/>
        
        <Route path='/react-crud/esqueci-senha' element={currentUser != null ? <Navigate to='/react-crud/'/> : <ForgotPassword/>}/>
        
        <Route path='/react-crud/update-profile' element={currentUser == null ? <Navigate to='/react-crud/login'/> : <UpdateProfile/>}/>

        <Route path='/react-crud/posts' element={currentUser == null ? <Navigate to='/react-crud/login'/> : <Posts/>}/>

        <Route path='/react-crud/create-post' element={currentUser == null ? <Navigate to='/react-crud/login'/> : <CreatePost/>}/>

        {posts.map(post => {
            return <Route path={`/react-crud/edit/${post.id}`} key={post.id} element={currentUser == null ? <Navigate to='/login'/> : 
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
