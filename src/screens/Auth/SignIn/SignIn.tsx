import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "./components/Card/Card";
import { supabase } from "../../../services/supabaseClient";
import useUserData from "../../../hook/useUserData";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { saveUserData, user } = useUserData(); // Usando o hook
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


    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });



    if (loginData?.user) {
      // Depois de logar, faz um GET para obter os dados do usuário na tabela 'usuario'
      const { data: userData, error: fetchError } = await supabase
        .from('usuario')  // Nome da tabela no Supabase
        .select('*')      // Seleciona todos os campos, pode ser personalizado
        .eq('email', email)  // Aqui buscamos o usuário pelo e-mail
        .single(); // Garantimos que apenas um usuário será retornado

      if (fetchError) {
        setError('Erro ao buscar dados do usuário: ' + fetchError.message);
        return;
      }

      saveUserData(userData);  // Salvando os dados do usuário no localStorage

    }



  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {/* <div className="flex  items-center justify-center">
       
      </div> */}
      <div className=" w-full h-1/2  bottom-0"></div>
      <div className="bg-primary w-full h-1/2  bottom-0"></div>


      <Card
        email={email}
        password={password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

    </div>
  );
}



//