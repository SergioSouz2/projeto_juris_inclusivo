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
  acesso: string;
}

export function SignUpPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    accessType: 'usuario', // Tipo de acesso inicial
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Função para tratar a mudança nos campos de formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para tratar o submit do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, phone, email, password, confirmPassword, accessType } = formData;

    // Verificando se as senhas coincidem
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem");
      return;
    }

    setLoading(true);
    setErrorMessage(null); // Limpando a mensagem de erro

    // Enviando dados de registro para o Supabase
    const { data, error } = await await supabase.auth.signInWithPassword({
      email: email,
      password: password,

    });



    setLoading(false);

    if (error) {
      setErrorMessage(error.message); // Exibindo o erro, caso ocorra
    } else {
      // Sucesso - Usuário foi criado com sucesso
      console.log('Usuário criado com sucesso:', data);
      // Aqui, você pode redirecionar o usuário ou limpar o formulário, por exemplo.
    }


    if (data?.user) {
      const { error: profileError } = await supabase.from("usuario").insert([
        {
          id: data.user.id,
          fullName: fullName,
          phone: phone,
          email: email,
          password: password,
          acesso: accessType
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
          accessType={formData.accessType}
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
