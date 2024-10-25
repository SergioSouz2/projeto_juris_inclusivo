import React, { useState } from "react";
import { Card } from "./components/Card/Card";
import { supabase } from "../../../services/supabaseClient"; // Certifique-se de ter a instância do Supabase importada

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      // Envia um email para redefinir a senha
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        setErrorMessage(error.message);
      } else {
        setMessage("Um email para redefinir a senha foi enviado para você.");
      }
    } catch (error) {
      console.error("Erro ao enviar email de redefinição de senha:", error);
      setErrorMessage("Erro ao enviar email. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="flex flex-col items-center justify-center w-2/4 relative z-10 p-4">
        <Card email={email} onSubmit={handleSubmit} onChange={handleChange} />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        {loading && <p>Enviando...</p>}
      </div>
      <div className="bg-primary w-full h-1/2 absolute bottom-0"></div>
    </div>
  );
}
