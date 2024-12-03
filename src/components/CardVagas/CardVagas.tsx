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
    visible: boolean | undefined;
    onEditarClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onExcluirClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export function CardVagas({
    descricao,
    imagem,
    localizacao,
    titulo,
    valor,
    tipo,
    exclusividade,
    visible,
    onEditarClick,
    onExcluirClick
}: props) {





    return (
        <div className=" h-64 mb-10 flex bg">
            <img className="rounded-l w-1/4 h-auto object-cover" src={imagem} alt={titulo} />

            <div className="bg-primaryPurple  rounded-r  w-full flex flex-col justify-between py-4">
                <div className="">

                    <div className="px-8 flex flex-col mb-5">
                        <h2 className="text-center font-bold text-xl text-white">{titulo}</h2>
                        <p className="text-base text-white">{descricao}</p>
                    </div>

                    <div className="flex w-full ">
                        <div className=" w-1/2 px-8 justify-between flex flex-col ">
                            {localizacao && (
                                <div className="flex items-center gap-4 mb-2">
                                    <Room style={{ fontSize: 20, color: 'white' }} />
                                    <p className="text-white">{localizacao}</p>
                                </div>
                            )}

                            {tipo && (<div className="flex items-center gap-4">
                                <BusinessCenter style={{ fontSize: 20, color: 'white' }} />
                                <p className="text-white">{tipo}</p>
                            </div>)}

                        </div>
                        <div className="w-1/2 px-8 justify-between flex flex-col" >
                            {valor && (
                                <div className="flex items-center gap-4 mb-2">
                                    <CurrencyExchange style={{ fontSize: 20, color: 'white' }} />
                                    <p className="text-white">{valor}</p>
                                </div>
                            )}

                            {exclusividade && (

                                <div className="flex items-center gap-4">
                                    <AssistWalker style={{ fontSize: 20, color: 'white' }} />
                                    <p className="text-white">{exclusividade}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-between px-7">
                    {visible && (
                        <div className="flex gap-6">
                            <button onClick={onEditarClick} className=" bg-primary hover:bg-primaryPurple text-white font-bold px-3 py-1 rounded-md">Editar</button>
                            <button onClick={onExcluirClick} className=" bg-primary hover:bg-primaryPurple text-white font-bold px-3 py-1 rounded-md">Excluir</button>
                        </div>
                    )}
                    <button className=" bg-primary hover:bg-primaryPurple text-white font-bold px-3 py-1 rounded-md">Visualizar Vaga</button>
                </div>

            </div>
        </div >
    );
}