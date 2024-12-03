import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { AddVagasForm, updateVaga } from "../../../services/VagasService";
import { useNavigate, useParams } from "react-router-dom";
import { updateFormData } from "../../../services/CursoService";



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

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);


    const [formData, setFormData] = useState<FormData | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const handleFormSubmit = async (data: FormData) => {
        // Atualiza o estado com os dados do formulário
        setFormData(data);

        // Se `id` não for definido, significa que estamos criando uma nova vaga
        if (!id) {
            const insertedData = await AddVagasForm(data); // Função para adicionar no Supabase
            if (insertedData) {
                console.log("Vaga adicionada com sucesso", insertedData);
            } else {
                console.error("Erro ao adicionar vaga");
            }
        } else {
            // Caso contrário, estamos atualizando a vaga existente
            const updateData = await updateVaga(id, data); // Atualiza a vaga no Supabase
            if (updateData) {
                console.log("Vaga atualizada com sucesso", formData);
            } else {
                console.error("Erro ao atualizar vaga");
            }
        }

        // Redireciona para a página de vagas
        navigate('/vagas', { replace: true });
    };



    return (
        <div className="w-screen h-screen flex justify-center ">
            <div className="w-2/4 ">
                <h1 className="font-bold text-xl text-primary text-center mt-10 mb-10">Anuncie vagas </h1>

                <form onSubmit={handleSubmit(handleFormSubmit)} >
                    <div className="flex gap-3 flex-col mb-4">
                        <label htmlFor="title" className="text-primary font-bold">Título:</label>
                        <input
                            className="border border-primary rounded-md"
                            type="text"
                            id="title"
                            {...register("title", { required: "O título é obrigatório." })}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>

                    <div className="flex gap-3 flex-col mb-4">
                        <label className="text-primary font-bold" htmlFor="description">Descrição:</label>
                        <textarea
                            className="border border-primary rounded-md"
                            id="description"
                            {...register("description", { required: "A descrição é obrigatória." })}
                        />
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>

                    <div className="flex gap-3 flex-col mb-4">
                        <label htmlFor="area_profissional" className="text-primary font-bold">Area profissional:</label>
                        <input
                            className="border border-primary rounded-md"
                            type="text"
                            id="area_profissional"
                            {...register("area_profissional", { required: "A area profissional é obrigatório." })}
                        />
                        {errors.area_profissional && <p>{errors.area_profissional.message}</p>}
                    </div>

                    <div className="flex gap-3 flex-col mb-4">
                        <label htmlFor="escolaridade" className="text-primary font-bold">Escolaridade:</label>
                        <input
                            className="border border-primary rounded-md"
                            type="text"
                            id="escolaridade"
                            {...register("escolaridade", { required: "A escolaridade é obrigatório." })}
                        />
                        {errors.escolaridade && <p>{errors.escolaridade.message}</p>}
                    </div>

                    <div className="flex justify-around mb-4">

                        <div className="flex gap-3 flex-col">
                            <label htmlFor="localizacao" className="text-primary font-bold">localização:</label>
                            <input
                                className="border border-primary rounded-md "
                                type="text"
                                id="localizacao"
                                {...register("localizacao", { required: "A localizacao é obrigatório." })}
                            />
                            {errors.localizacao && <p>{errors.localizacao.message}</p>}
                        </div>

                        <div className="flex gap-3 flex-col">
                            <label htmlFor="valor" className="text-primary font-bold">Valor:</label>
                            <input
                                className="border border-primary rounded-md"
                                type="number"
                                id="valor"
                                {...register("valor", { required: "O valor é obrigatório." })}
                            />
                            {errors.valor && <p>{errors.valor.message}</p>}
                        </div>

                        <div className="flex gap-3 flex-col">
                            <label className="text-primary font-bold" htmlFor="tipo">Tipo:</label>
                            <select className="border border-primary rounded-md" id="tipo" {...register("tipo", { required: "Selecione um tipo é obrigatória." })}>
                                <option value="PJ">PJ</option>
                                <option value="Freelancer">Freelancer</option>
                                <option value="CLT">CLT</option>
                            </select>
                            {errors.tipo && <p>{errors.tipo.message}</p>}
                        </div>


                    </div>

                    <div className="flex justify-around mb-4">
                        <div className="flex gap-3 flex-col">
                            <label className="text-primary font-bold" htmlFor="category">Categoria:</label>
                            <select className="border border-primary rounded-md" id="category" {...register("category", { required: "A categoria é obrigatória." })}>
                                <option value="Inclusão começa com oportunidade">Inclusão começa com oportunidade</option>
                            </select>
                            {errors.category && <p>{errors.category.message}</p>}
                        </div>

                        <div className="flex gap-3 flex-col">
                            <label className="text-primary font-bold" htmlFor="exclusividade">Exclusividade:</label>
                            <select className="border border-primary rounded-md" id="exclusividade" {...register("exclusividade", { required: "A exclusividade é obrigatória." })}>
                                <option value="Exclusivo PDC">Exclusivo PCD</option>
                            </select>
                            {errors.exclusividade && <p>{errors.exclusividade.message}</p>}
                        </div>


                    </div>





                    <div className="flex mt-10 mb-4">
                        <button type="submit" className=" w-full px-4 py-1 rounded-md border border-primary bg-primaryPurple hover:bg-primary hover:text-white text-primary">Enviar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}