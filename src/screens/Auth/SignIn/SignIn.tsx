import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "./components/Card/Card";
import { supabase } from "../../../services/supabaseClient";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Criar o hook de navegação

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);

      // Login do usuário com Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        // Redirecionar para a página home após o login bem-sucedido
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative ">
      <div className="flex flex-col items-center justify-center w-1/4 relative z-10 p-4">
        <Card
          email={email}
          password={password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="bg-primary w-full h-1/2 absolute bottom-0"></div>
    </div>
  );
}
