import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import ListProduct from "./pages/ListProduct";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
