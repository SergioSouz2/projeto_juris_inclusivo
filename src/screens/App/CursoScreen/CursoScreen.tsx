import React, { useEffect, useState } from "react";
import { supabase } from "../../../services/supabaseClient";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { Footer } from "../../../components/Footer/Footer";
import { CardLancamento } from "../../../components/CardLancamento/CardLancamento";
import { ListaHorizontal } from "../../../components/ListaHorizontal/ListaHorizontal";

interface Course {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
}

export function CursoScreen() {
  const [courses, setCourses] = useState<Course[]>([]);

  const lancamentos = courses.filter((curso) => curso.categoria === "Lançamentos Gratuitos");
  const M_Lista = courses.filter((curso) => curso.categoria === "Minha Lista");
  const Ao_vivo = courses.filter((curso) => curso.categoria === "Ao vivo");

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
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <div className="flex flex-wrap">
        <div className="flex-shrink-0 w-1/4">
          <Menu /> {/* Menu com largura fixa, ajustando para a tela */}
        </div>


        <div className="flex-1 w-2/3 mt-8">

          <h2 className="text-primary text-left mb-7 font-bold text-xl">Lançamentos Gratuitos</h2>
          <ListaHorizontal>
            {lancamentos.map((curso) => (
              <CardLancamento
                key={curso.id} // Usando o ID único do curso
                title={curso.titulo}
                descricao={curso.descricao}
                imagem={curso.imagem}
                onpres={sumitCurso} // Função chamada quando um curso é selecionado
              />
            ))}
          </ListaHorizontal>


          <h2 className="text-primary text-left mb-7 font-bold text-xl">Minha Lista</h2>
          {/* Exemplo de como renderizar outra lista, caso queira */}
          <ListaHorizontal>
            {M_Lista.map((curso) => (
              <CardLancamento
                key={curso.id}
                title={curso.titulo}
                descricao={curso.descricao}
                imagem={curso.imagem}
                onpres={sumitCurso}
              />
            ))}
          </ListaHorizontal>



          <h2 className="text-primary text-left mb-7 font-bold text-xl">Ao vivo</h2>
          {/* Ao Vivo */}
          <ListaHorizontal>
            {Ao_vivo.map((curso) => (
              <CardLancamento
                key={curso.id}
                title={curso.titulo}
                descricao={curso.descricao}
                imagem={curso.imagem}
                onpres={sumitCurso}
              />
            ))}
          </ListaHorizontal>


        </div>
      </div>
      <Footer />
    </div>
  );
}
