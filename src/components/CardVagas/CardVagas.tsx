import { Room, CurrencyExchange, BusinessCenter, AssistWalker } from "@mui/icons-material";
import React from "react";



interface props {
    titulo: string | undefined;
    imagem: string | undefined;
    descricao: string | undefined;
    localizacao: string | undefined;
    valor: string | undefined;
    tipo: string | undefined;
    exclusividade: string | undefined;
}


export function CardVagas({
    descricao,
    imagem,
    localizacao,
    titulo,
    valor,
    tipo,
    exclusividade
}: props) {
    return (
        <div className=" h-64 mb-10 flex">
            <img className="rounded-l w-1/4 h-auto object-cover" src={imagem} alt={titulo} />

            <div className="bg-primaryPurple  rounded-r relative">
                <div className="px-8 flex flex-col mb-5">
                    <h2 className="text-center font-bold text-xl text-white">{titulo}</h2>
                    <p className="text-base text-white">{descricao}</p>
                </div>

                <div className="flex w-full ">
                    <div className=" w-1/2 px-8 justify-between flex flex-col ">
                        {localizacao && (
                            <div className="flex items-center gap-4 mb-2">
                                <Room style={{ fontSize: 30, color: 'white' }} />
                                <p className="text-white">{localizacao}</p>
                            </div>
                        )}

                        {tipo && (<div className="flex items-center gap-4">
                            <BusinessCenter style={{ fontSize: 30, color: 'white' }} />
                            <p className="text-white">{tipo}</p>
                        </div>)}

                    </div>
                    <div className="w-1/2 px-8 justify-between flex flex-col" >
                        {valor && (
                            <div className="flex items-center gap-4 mb-2">
                                <CurrencyExchange style={{ fontSize: 30, color: 'white' }} />
                                <p className="text-white">{valor}</p>
                            </div>
                        )}

                        {exclusividade && (

                            <div className="flex items-center gap-4">
                                <AssistWalker style={{ fontSize: 30, color: 'white' }} />
                                <p className="text-white">{exclusividade}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-red-300 ">
                    <button className=" z-10 absolute right-7 bottom-7 bg-primary hover:bg-primaryPurple text-white font-bold px-3 py-1 rounded-md">Visualizar Vaga</button>
                </div>

            </div>
        </div>
    );
}