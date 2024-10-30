import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { supabase } from "../../../services/supabaseClient";

interface Course {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
}

export function CursoScreen() {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    const { data, error } = await supabase.from("cursos").select("*"); // Substitua "cursos" pelo nome correto da tabela
    if (error) {
      console.error("Erro ao buscar cursos:", error);
    } else {
      console.log("Dados dos cursos:", data);
      console.error("Erro ao buscar cursos:", error);

      setCourses(data as Course[]);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Tela de Cursos</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              width: "200px",
            }}
          >
            <img
              src={course.imagem}
              alt={course.titulo}
              style={{ width: "100%", height: "auto" }}
            />
            <h2>{course.titulo}</h2>
            <p>{course.descricao}</p>
            <span>{course.categoria}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
