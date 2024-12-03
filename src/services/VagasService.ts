import { supabase } from './supabaseClient';


export const AddVagasForm = async (formData: {
    title: string;
    description: string;
    category: string;
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
                    categoria: formData.category,
                    titulo: formData.title,
                    descricao: formData.description,
                    imagem: "https://gospelminas.com/wp-content/uploads/2022/08/vaga2.jpg",
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




export const getAllVagas = async () => {
    try {
        const { data, error } = await supabase
            .from('vagas')
            .select('*'); // Seleciona todos os campos da tabela 'vagas'

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Erro ao buscar vagas:', error);
        return [];
    }
};


export const getVagaById = async (vagaId: number) => {
    try {
        const { data, error } = await supabase
            .from('vagas')
            .select('*')
            .eq('id', vagaId) // Aqui você substitui 'id' pelo nome correto da sua chave primária
            .single(); // Garante que apenas um resultado seja retornado

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Erro ao buscar vaga por ID:', error);
        return null;
    }
};




export const updateVaga = async (vagaId: string, updatedData: {
    title: string;
    description: string;
    category: string;
    localizacao: string;
    valor: string;
    tipo: string;
    exclusividade: string;
    escolaridade: string;
    area_profissional: string;
}) => {
    try {
        const { data, error } = await supabase
            .from('vagas')
            .update([
                {
                    categoria: updatedData.category,
                    titulo: updatedData.title,
                    descricao: updatedData.description,
                    imagem: "https://gospelminas.com/wp-content/uploads/2022/08/vaga2.jpg",
                    localizacao: updatedData.localizacao,
                    valor: updatedData.valor,
                    tipo: updatedData.tipo,
                    exclusividade: updatedData.exclusividade,
                    escolaridade: updatedData.escolaridade,
                    area_profissional: updatedData.area_profissional
                }
            ]) // Atualiza os dados fornecidos
            .eq('id', vagaId); // Encontra a vaga pela chave primária (ID)

        if (error) throw error;

        console.log('Vaga atualizada com sucesso:', data);
        return data;
    } catch (error) {
        console.error('Erro ao atualizar vaga:', error);
        return null;
    }
};




export const deleteVaga = async (vagaId: string) => {
    try {
        const response = await supabase
            .from('vagas')
            .delete()
            .eq('id', vagaId)
    } catch (error) {
        console.error('Erro ao deletar vaga:', error);
        return null;
    }
};


