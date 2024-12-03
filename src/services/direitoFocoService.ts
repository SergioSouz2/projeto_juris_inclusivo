import { supabase } from "./supabaseClient";

export const getFormData = async () => {
    try {
        const { data, error } = await supabase
            .from('Direito')
            .select('*');

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
};