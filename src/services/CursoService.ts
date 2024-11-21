import { supabase } from './supabaseClient';

// Função para adicionar dados ao Supabase
export const addFormData = async (formData: { title: string; description: string; category: string; meta: string }) => {
    try {
        const { data, error } = await supabase
            .from('cursos') // Nome da tabela no Supabase
            .insert([
                {
                    titulo: formData.title,
                    descricao: formData.description,
                    categoria: formData.category,
                    metodo: formData.meta,
                    imagem: "https://cdn-icons-png.flaticon.com/512/1754/1754435.png"
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

// Função para buscar todos os dados da tabela 'form_data'
export const getFormData = async () => {
    try {
        const { data, error } = await supabase
            .from('cursos')
            .select('*');

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
};

// Função para atualizar dados no Supabase
export const updateFormData = async (id: string, formData: { title: string; description: string; category: string; meta: string }) => {
    try {
        const { data, error } = await supabase
            .from('cursos')
            .update({
                title: formData.title,
                description: formData.description,
                category: formData.category,
                meta: formData.meta,
            })
            .eq('id', id); // Filtrando pelo id

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        return null;
    }
};

// Função para excluir dados no Supabase
export const deleteFormData = async (id: string) => {
    try {
        const { data, error } = await supabase
            .from('cursos')
            .delete()
            .eq('id', id); // Filtrando pelo id

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Erro ao excluir dados:', error);
        return null;
    }
};
