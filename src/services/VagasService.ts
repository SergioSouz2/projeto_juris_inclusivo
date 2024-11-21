import { supabase } from './supabaseClient';


export const AddVagas = async (formData: {
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

}) => {
    try {
        const { data, error } = await supabase
            .from('vagas') // Nome da tabela no Supabase
            .insert([
                {
                    titulo: formData.title,
                    descricao: formData.description,
                    categoria: formData.category,
                    metodo: formData.meta,
                    imagem: "https://cdn-icons-png.flaticon.com/512/1754/1754435.png",
                    localizacao: formData.localizacao,
                    valor: formData.valor,
                    tipo: formData.tipo,
                    exclusividade: formData.exclusividade,
                    escolaridade: formData.escolaridade,
                    area_profissional: formData.area_profissional

                },
            ]);

        if (error) throw error;

        console.log('Dados inseridos com sucesso:', data);
        return data;
    } catch (error) {
        console.error('Erro ao adicionar dados:', error);
        return null;
    }
};