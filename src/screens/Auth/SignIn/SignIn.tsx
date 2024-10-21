import React, { useState } from "react";
import { Card } from "./components/Card/Card";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do login
    console.log({ email, password });
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
