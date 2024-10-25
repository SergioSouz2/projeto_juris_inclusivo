import React from "react";
import "./App.css";
import { SignInPage } from "./screens/Auth/SignIn/SignIn";
import { SignUpPage } from "./screens/Auth/SignUp/SignUp";
import { HomePage } from "./screens/App/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPasswordScreen } from "./screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/recuperar" element={<ForgotPasswordScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
