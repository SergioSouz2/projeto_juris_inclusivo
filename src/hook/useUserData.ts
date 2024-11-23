import { useState, useEffect } from 'react';

// Tipagem para os dados do usuário


const useUserData = () => {
    const [user, setUser] = useState<any | null>(null);

    // Recupera os dados do usuário do localStorage ao carregar o componente
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Função para salvar os dados no localStorage
    const saveUserData = (userData: any) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Função para limpar os dados do usuário
    const clearUserData = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return {
        user,
        saveUserData,
        clearUserData,
    };
};

export default useUserData;
