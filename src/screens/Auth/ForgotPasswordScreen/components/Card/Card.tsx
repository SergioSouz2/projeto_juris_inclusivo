import React from "react";

interface SignInProps {
  email?: string;
}

export function Card({ email }: SignInProps) {
  return (
    <div className="w-2/4 h-[600px]  ">
      <div className="bg-primary rounded-t-lg flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white mt-4 mb-4">
          Esqueceu a senha ?
        </h1>
      </div>
      <div className="bg-white h-[500px] flex flex-col items-center justify-center rounded-b-lg p-4">
        <h2 className="mt-8 text-xs font-normal  mb-6">
          Para recuperar sua senha, insira seu e-mail abaixo. Você receberá um
          link para criar uma nova senha.
        </h2>
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-gray-700 text-left">E-mail:</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Insira seu e-mail"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primaryPurple text-white py-2 rounded-md w-full hover:bg-primary transition"
          >
            Efetuar Login
          </button>
        </form>
      </div>
    </div>
  );
}
