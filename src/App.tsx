import React from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SignInPage } from "./screens/Auth/SignIn/SignIn";
import { SignUpPage } from "./screens/Auth/SignUp/SignUp";
import { HomePage } from "./screens/App/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPasswordScreen } from "./screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen";
import { CursoScreen } from "./screens/App/CursoScreen/CursoScreen";
import { VagasScreen } from "./screens/App/VagasScreen/VagasScreen";
import { DireitoFocoScreen } from "./screens/App/DireitoFocoScreen/DireitoFocoScreen";
import { AddCursoScreen } from "./screens/App/AddCursoScreen/AddCursoScreen";
import { AddVagasScreen } from "./screens/App/AddVagasScreen/AddVagasScreen";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/recuperar" element={<ForgotPasswordScreen />} />
          <Route path="/topico" element={<DireitoFocoScreen />} />
          <Route path="/vagas" element={<VagasScreen />} />
          <Route path="/curso" element={<CursoScreen />} />
          <Route path="/curso/adicionar" element={<AddCursoScreen />} />
          <Route path="/vagas/adicionar" element={<AddVagasScreen />} />
          <Route path="/vagas/adicionar/:id?" element={<AddVagasScreen />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
