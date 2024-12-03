import React from "react";
import { Edit, Delete } from "@mui/icons-material";

interface CardLancamentoProps {
    title: string;
    descricao: string;
    imagem: string;
    onpres: () => void;
    visible?: boolean | undefined;
    button: string;
}

export function CardLancamento({ title, descricao, imagem, onpres, visible, button }: CardLancamentoProps) {
    return (
        <div className="w-[250px] h-[380px]  rounded-md flex flex-col bg-primaryPurple">
            {/* Imagem do Card */}
            <img
                src={imagem}
                alt={title}
                className="w-full h-[150px] object-cover rounded-t-md"
            />

            {/* Conteúdo do Card (Título e Descrição) */}
            <div className="flex flex-col flex-grow p-2">
                <h2 className="font-bold text-lg text-white">{title}</h2>
                <p className="text-xs  text-white">{descricao}</p>
            </div>

            {/* Botão fixo na parte inferior e alinhado à direita */}
            <div className="flex justify-between p-2">
                {visible &&
                    <div className="flex">
                        <button className="bg-primary px-3 py-1 font-bold text-white rounded-md text-center text-sm hover:bg-primaryPurple mr-2 w-6 h-6 flex justify-center items-center"><Delete fontSize="inherit" /></button>
                        <button className="bg-primary px-3 py-1 font-bold text-white rounded-md text-center text-sm hover:bg-primaryPurple w-6 h-6 flex justify-center items-center"><Edit fontSize='inherit' /></button>
                    </div>
                }
                <button
                    onClick={onpres}
                    className="w-[100px] h-[30px] bg-primary px-3 py-1 font-bold text-white rounded-md text-center text-sm hover:bg-primaryPurple"
                >
                    {button}
                </button>
            </div>
        </div>



    );
}
