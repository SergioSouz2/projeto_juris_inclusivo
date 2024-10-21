import React, { useState } from "react";
import { Card } from "./components/Card/Card";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
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
      </div>
      <div className="bg-primary w-full h-1/2 absolute bottom-0"></div>
    </div>
  );
}
