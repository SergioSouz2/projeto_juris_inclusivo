import React from "react";
import { Link } from "react-router-dom";

interface SignInProps {
  email: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Card({ email, password, onChange, onSubmit }: SignInProps) {
  return (
    <div>
      <div className="bg-primary rounded-t-lg flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white mt-4 mb-4">
          JurisInclusivo
        </h1>
      </div>
      <div className="bg-white flex flex-col items-center rounded-b-lg p-4">
        <h2 className="mt-8 text-xl font-semibold text-primary mb-6">Login</h2>

        <div className="px-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded mb-2 w-full">
            Entre com o Facebook
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded mb-4 w-full">
            Entre com o Google
          </button>
        </div>

        <div className="text-center mb-4 flex justify-center items-center gap-6">
          <div className="w-[50px] h-[1px] bg-gray-400"></div>
          <span className="text-gray-600">OU</span>
          <div className="w-[50px] h-[1px] bg-gray-400"></div>
        </div>

        <form className="w-full max-w-xs" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">E-mail:</label>
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
          <div className="mb-6">
            <label className="block text-gray-700 text-left">Senha:</label>
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
          <div className="mb-4 flex justify-between items-center">
            <Link to={"/recuperar"}>
              <a href="#" className="text-blue-500">
                Esqueceu a senha?
              </a>
            </Link>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Não sou um robô
            </label>
          </div>
          <button
            type="submit"
            className="bg-primaryPurple text-white py-2 rounded-md w-full hover:bg-primary transition"
          >
            Efetuar Login
          </button>
        </form>

        <div className="mt-4 mb-4">
          <span className="text-gray-600">
            Ainda não tem login?
            <Link to={"/register"}>
              <a href="#" className="text-blue-500">
                {" "}
                Clique aqui para se cadastrar.
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
