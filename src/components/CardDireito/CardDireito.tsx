import { AccountCircle } from "@mui/icons-material";
import React from "react"



interface CardProps {
    name: string;
    descricao: string,
    imagem: string,

}

export function CardDireito({ name, imagem, descricao }: CardProps) {
    return (
        <div className="w-[312px] h-[415px] bg-primaryPurple rounded-xl flex flex-col" >
            <div className="h-3/5">
                <img src={imagem} alt={name} className="rounded-xl object-cover w-full h-full" />
            </div>

            <div className="h-2/5 px-6">
                <div className="flex items-center ">
                    <AccountCircle style={{ fontSize: 30, color: '#593476' }} />
                    <div className="ml-2">
                        <h2 className="text-lg font-bold text-text">{name}</h2>
                        <p className="text-xs text-text">10 de Novembro 2024  -  5 min de leitura</p>
                    </div>
                </div>
                <p className="text-text text-sm">{descricao}</p>
            </div>
        </div>
    )
}