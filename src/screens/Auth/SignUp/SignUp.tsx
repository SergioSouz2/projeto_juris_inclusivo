import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o useNavigate
import { Card } from "./components/Card/Card";
import { supabase } from "../../../services/supabaseClient";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Criar o hook de navegação

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, phone, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    // Registro do usuário com Supabase (email e senha)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(error);

    if (data?.user) {
      const { error: profileError } = await supabase.from("usuario").insert([
        {
          id: data.user.id,
          fullName: fullName,
          phone: phone,
          email: email,
          password: password,
        },
      ]);

      if (profileError) {
        setErrorMessage(profileError.message);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 relative">
      <div className="flex flex-col items-center justify-center h-full relative z-10 p-4">
        <Card
          fullName={formData.fullName}
          phone={formData.phone}
          email={formData.email}
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {loading && <p>Registrando usuário...</p>}
      </div>
      <div className="bg-primary w-full h-1/2 absolute bottom-0"></div>
    </div>
  );
}
