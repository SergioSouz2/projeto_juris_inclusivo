import React, { useEffect, useState } from "react";
import { supabase } from "../../../services/supabaseClient";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { Footer } from "../../../components/Footer/Footer";
import { CardLancamento } from "../../../components/CardLancamento/CardLancamento";
import { Link } from "react-router-dom";
import useUserData from "../../../hook/useUserData";


interface Course {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
}

export function CursoScreen() {
  const [courses, setCourses] = useState<Course[]>([]);
  const { user, clearUserData } = useUserData();
  const visible = user && user.acesso === 'administrador';


  const fetchCourses = async () => {
    const { data, error } = await supabase.from("cursos").select("*");
    if (error) {
      console.error("Erro ao buscar cursos:", error);
    } else {
      setCourses(data as Course[]);
    }
  };

  const sumitCurso = () => {
    console.log("Curso selecionado");
  };





  useEffect(() => {
    fetchCourses();
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-end mr-10 mb-10">
        <button className="px-4 py-1 rounded-md border border-primary bg-primaryPurple hover:bg-primary hover:text-white text-primary">
          <Link to="/curso/adicionar">Adiconar</Link>
        </button>
      </div>
      <div className="flex flex-1">
        {/* Menu lateral fixo */}
        <div className="w-[300px] min-h-screen bg-gray-200">
          <div className=" px-4">
            <input
              id="search"
              type="text"
              placeholder="Digite para pesquisar..."
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-primaryPurple focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Menu
            title="Métado de Aprendizagem"
            items={[
              "Bootcamp",
              "Formação",
              "Aceçeração",
              "Curso",
              "Mentoria",
            ]}
          />

        </div>


        {/* Conteúdo à direita que se adapta */}
        <div className="flex-1 flex flex-wrap gap-5 p-5 overflow-y-auto">
          {courses.map((curso) => (
            <CardLancamento
              key={curso.id}
              title={curso.titulo}
              descricao={curso.descricao}
              imagem={curso.imagem}
              onpres={sumitCurso}
              visible={visible}
              button="Agendar"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>

  );
}
