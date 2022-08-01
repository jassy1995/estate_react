import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import HomePage from "./pages/Home";
import PropertyDetailsPage from "./pages/PropertyDetails";
import { PropertyPage } from "./pages/PropertyPage";
import LoginPage from "pages/loginPage";
import SignUpPage from "pages/signUpPage";
import OrderPage from "pages/OrderPage";
import AddPropertyPage from "pages/AddPropertyPage";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" limit={1} />
      <div className="max-w-[1540px] mx-auto bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/create-property" element={<AddPropertyPage />} />
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
