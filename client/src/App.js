import Layout from "./components/Layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="rooms/*" element={<RoomsPage />}></Route>
        <Route path="about" element={<h1>À propos</h1>}></Route>
        <Route path="contact" element={<h1>Contact</h1>}></Route>
        <Route path="*" element={<h1>Not Found 404</h1>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
