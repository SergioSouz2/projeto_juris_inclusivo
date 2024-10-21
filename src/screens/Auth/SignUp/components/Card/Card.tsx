import React from "react";

interface CardProps {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Card({
  fullName,
  phone,
  email,
  password,
  confirmPassword,
  onChange,
  onSubmit,
}: CardProps) {
  return (
    <div className="w-1/4">
      <div className="bg-primary rounded-t-lg flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white mt-4 mb-4">
          JurisInclusivo
        </h1>
      </div>
      <div className="bg-white flex flex-col items-center rounded-b-lg p-4">
        <h2 className="mt-8 text-xl font-semibold text-primary mb-6">
          Cadastre-se
        </h2>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
            <label className=" text-left block text-gray-700">
              Nome Completo:
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={onChange}
              placeholder="Insira seu nome completo"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className=" text-left block text-gray-700">Telefone:</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={onChange}
              placeholder="Insira seu telefone"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className=" text-left block text-gray-700">E-mail:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Insira seu e-mail"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className=" text-left block text-gray-700">Senha:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Insira sua senha"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className=" text-left block text-gray-700">
              Confirmar Senha:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Confirme sua senha"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primaryPurple text-white font-bold py-2 rounded-md w-full hover:bg-primary transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
