import React from "react";

interface CardLancamentoProps {
    title: string;
    descricao: string;
    imagem: string;
    onpres: () => void;
}

export function CardLancamento({ title, descricao, imagem, onpres }: CardLancamentoProps) {
    return (
        <div className=" w-[370px] h-[250px] rounded-xl relative mx-2 border border-primary"> {/* Adicionando margin-x para separar os itens */}
            <img src={imagem} alt={title} className="absolute rounded-xl object-cover w-full h-full" />
            <div className="absolute z-10 bottom-0 left-0 text-left p-5 w-full flex justify-between items-end flex-col">
                <div>
                    <h2 className="text-white font-bold text-xl">{title}</h2>
                    <p className="text-white font-semibold text-[12px]">{descricao}</p>
                </div>
                <button
                    onClick={onpres}
                    className="bg-primary px-3 py-1 font-bold text-white rounded-md text-center text-sm flex hover:bg-primaryPurple"
                >
                    Agendar
                </button>
            </div>
        </div>
    );
}
