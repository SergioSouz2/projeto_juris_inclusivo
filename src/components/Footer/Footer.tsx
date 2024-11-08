import React, { useState } from "react";

import logo_footer from "../../assets/images/logo_footer.png";



export function Footer() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <footer className="bg-gray h-[260px] flex items-center justify-center p-4 gap-8">
            <img
                className="object-cover h-full" // Ajuste para caber melhor
                src={logo_footer}
                alt="logo footer"
            />
            <div className="ml-4 flex flex-col w-[600px] ">
                <h2 className="text-xl font-bold mb-2 text-primary">
                    Receba nossas promoções e novidades em seu e-mail!
                </h2>
                <div className="flex justify-between mb-2  border-[3px] border-primary rounded-md">
                    <input
                        type="email"
                        name="receber_promo"
                        id="receber_promo"
                        className="px-2 py-1 border-none  rounded-md focus:outline-none focus:border-transparent w-screen"
                        placeholder="Digite seu e-mail"
                        required
                    />
                    <button className="bg-primaryPurple text-white font-bold px-4 py-1 hover:bg-primary">
                        Cadastrar
                    </button>
                </div>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mr-2 "
                    />
                    <span className="text-sm text-gray01">
                        Ao clicar em cadastrar, concordo que li e aceito os
                        <a href="" className="text-black underline">
                            {" "}
                            Termos de Uso
                        </a>
                        ,
                        <a href="" className="text-black underline">
                            {" "}
                            Condições Gerais do Seguro
                        </a>{" "}
                        e
                        <a href="" className="text-black underline">
                            Cobertura do produto.
                        </a>
                    </span>
                </label>
            </div>
        </footer>

    )
}