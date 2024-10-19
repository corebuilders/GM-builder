// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BlogProvider } from "./context/ContextProvider";
import Home from "./Pages/Home";
import BlogSection from "./Pages/BlogSection";
import ViewBlog from "./Pages/ViewBlog";
import AddBlog from "./Pages/AddBlog";
import Graph from "./components/Graph";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <BlogProvider>
          <Routes>
            <Route path="/" element={<Home /*state = {state}*/ />} />
            <Route path="/blog" element={<BlogSection /*state = {state}*/ />} />
            <Route path="/addblog" element={<AddBlog /*state = {state}*/ />} />
            <Route path="/graph" element={<Graph /*state = {state}*/ />} />
            <Route path="/profile" element={<Profile /*state = {state}*/ />} />
            <Route
              path="/blogview"
              element={<ViewBlog /*state = {state}*/ />}
            />
          </Routes>
          {/* {<RegisterPage/>}  */}
        </BlogProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
