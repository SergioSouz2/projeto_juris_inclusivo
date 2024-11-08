import React from "react";



export function Menu() {
    return (
        <div className="bg-gray-800 flex-shrink-0 w-[300px]  text-white p-4 h-screen">

            <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium mb-2">
                    Buscar
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Digite para pesquisar..."
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-primaryPurple focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <h2 className="text-xl font-semibold mb-6 text-primary">Método de Aprendizagem</h2>

            <div>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="Bootcamp "
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="Bootcamp" className="ml-2 text-sm font-medium text-black">
                            Bootcamp
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="Formacao"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="Formacao" className="ml-2 text-sm font-medium text-black">
                            Formação
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="Aceleracao"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="Aceleracao" className="ml-2 text-sm font-medium text-black">
                            Aceleração
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="Curso"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="Curso" className="ml-2 text-sm font-medium text-black">
                            Curso
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="Mentoria"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="Mentoria" className="ml-2 text-sm font-medium text-black">
                            Mentoria
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
