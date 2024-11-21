import React, { useState } from "react";
import { useForm } from 'react-hook-form';



export interface FormData {
    title: string;
    description: string;
    category: string;
    meta: string;
    localizacao: string;
    valor: string;
    tipo: string;
    exclusividade: string;
    escolaridade: string;
    area_profissional: string;
}


export function AddVagasScreen() {


    const [formData, setFormData] = useState<FormData | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const handleFormSubmit = async (data: FormData) => {
        setFormData(data); // Atualiza o estado com os dados do formulário
        // const insertedData = await addFormData(data); // Chama a função para adicionar no Supabase
        // navigate('/curso', { replace: true });

    };


    return (
        <div className="w-screen h-screen flex justify-center ">
            <div className="w-2/4 ">
                <h1>Anuncie vagas </h1>

                <form onSubmit={handleSubmit(handleFormSubmit)}  >
                    <div className="flex gap-3 flex-col">
                        <label htmlFor="title" className="text-primary font-bold">Título:</label>
                        <input
                            className="border border-primary rounded-md"
                            type="text"
                            id="title"
                            {...register("title", { required: "O título é obrigatório." })}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>

                    <div className="flex gap-3 flex-col">
                        <label className="text-primary font-bold" htmlFor="description">Descrição:</label>
                        <textarea
                            className="border border-primary rounded-md"
                            id="description"
                            {...register("description", { required: "A descrição é obrigatória." })}
                        />
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>

                    <div className="flex gap-3 flex-col">
                        <label className="text-primary font-bold" htmlFor="category">Categoria:</label>
                        <select className="border border-primary rounded-md" id="category" {...register("category", { required: "A categoria é obrigatória." })}>
                            <option value="Lançamentos Gratuitos">Lançamentos Gratuitos</option>
                            <option value="Minha Lista">Minha Lista</option>
                            <option value="Ao vivo">Ao vivo</option>
                        </select>
                        {errors.category && <p>{errors.category.message}</p>}
                    </div>

                    <div className="flex gap-3 flex-col">
                        <label className="text-primary font-bold" htmlFor="metodo">Metódo:</label>
                        <select className="border border-primary rounded-md" id="meta" {...register("meta", { required: "A metódo é obrigatória." })}>
                            <option value="Curso">Curso</option>
                            <option value="Mentoria">Mentoria</option>
                            <option value="Bootcamp">Bootcamp</option>
                            <option value="Formação">Formação</option>
                            <option value="Aceleração">Aceleração</option>
                        </select>
                        {errors.meta && <p>{errors.meta.message}</p>}
                    </div>



                    <div className="flex mt-10">
                        <button type="submit" className=" w-full px-4 py-1 rounded-md border border-primary bg-primaryPurple hover:bg-primary hover:text-white text-primary">Enviar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}