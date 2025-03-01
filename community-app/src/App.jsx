import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PostLoginHome from "./pages/PostLoginHome";
import Dashboard from "./YogaCompnents/Dashboard";
import YogasanaDetail from "./YogaCompnents/YogasanaDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-login-home" element={<PostLoginHome />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/yoga/:id" element={<YogasanaDetail />} />


      </Routes>
    </Router>
    
  );
}

export default App;
