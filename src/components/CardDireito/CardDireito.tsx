import React from "react"



interface CardProps {
    name: string;
    imageProfile: string,
    descricao: string,
    imagem: string,

}

export function CardDireito({ name, imagem, imageProfile, descricao }: CardProps) {
    return (
        <div className="w-[412px] h-[515px] bg-primaryPurple rounded-xl flex flex-col" >
            <div className="h-3/5">
                <img src={imagem} alt="" className="rounded-xl object-cover w-full h-full" />
            </div>

            <div className="h-2/5 px-6">
                <div className="flex items-center">
                    <img src={imageProfile} alt="" className=" mr-2 rounded-xl object-cover w-8 h-8" />
                    <div>
                        <h2>{name}</h2>
                        <p>10 de Novembro 2024  -  5 min de leitura</p>
                    </div>
                </div>
                <p>{descricao}</p>
            </div>
        </div>



        // <div >
        //     <p>{name}</p>
        //     <p>{imageProfile}</p>
        //     <p>{descricao}</p>
        //     <p>{imagem}</p>
        // </div>
    )
}