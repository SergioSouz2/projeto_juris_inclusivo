import React from "react";
import "./App.css";
import { SignInPage } from "./screens/Auth/SignIn/SignIn";
import { SignUpPage } from "./screens/Auth/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <SignUpPage />
    </div>
  );
}

export default App;
