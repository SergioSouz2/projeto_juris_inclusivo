import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { supabase } from "../../../services/supabaseClient";
import { CardVagas } from "../../../components/CardVagas/CardVagas";
import { ListaHorizontal } from "../../../components/ListaHorizontal/ListaHorizontal";
import { CardLancamento } from "../../../components/CardLancamento/CardLancamento";
import { Link, useNavigate } from "react-router-dom";
import useUserData from "../../../hook/useUserData";
import { deleteVaga, getAllVagas, updateVaga } from "../../../services/VagasService";
import { Footer } from "../../../components/Footer/Footer";



interface VagasProps {
  id: string;
  created_at?: string;
  categoria?: string;
  titulo: string;
  imagem: string;
  descricao: string;
  localizacao?: string;
  valor?: string;
  tipo?: string;
  exclusividade?: string;
  escolaridade?: string;
  area_profissional?: string;
}




export function VagasScreen() {
  const navigate = useNavigate()

  const [vagas, setVagas] = useState<VagasProps[]>([]);
  const fetchVagas = async () => {
    try {
      const { data, error } = await supabase.from("vagas").select("*");
      setVagas(data as VagasProps[]);
    } catch (err) {
      console.error("Erro ao buscar Vagas:", err);
    }
  };



  async function onExcluirClick(vagaId: string) {
    const resultDel = await deleteVaga(vagaId)
    const resultSelect = await getAllVagas()
    setVagas(resultSelect as VagasProps[]);

  }

  useEffect(() => {
    fetchVagas();
  }, []);

  const { user, clearUserData } = useUserData();
  const visible = user && user.acesso === 'administrador';


  return (
    <div className="min-h-screen flex flex-col"> {/* Impede o scroll horizontal */}
      <Navbar />
      <div className="flex justify-end mr-10 ">
        <button className="px-4 py-1 rounded-md border border-primary bg-primaryPurple hover:bg-primary hover:text-white text-primary">
          <Link to="/vagas/adicionar">Adiconar</Link>
        </button>
      </div>
      <div className="flex flex-1"> {/* Flexbox que se ajusta responsivamente */}
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
            title="Local"
            items={[
              "Presencial",
              "Home Office",
            ]}
          />
          <Menu
            title="Estado"
            items={[
              "Brasília",
              "Rio de Janeiro",
              "Santa Catarina",
            ]}
          />

          <Menu
            title="Área Profissional"
            items={[
              "Contabilidade",
              "Portuaria",
              "Recursos Humanos",
              "Comércio Exterior",
              "Saúde",

            ]}
          />

          <Menu
            title="Escolaridade"
            items={[
              "Ensino Fundamental",
              "Ensino Médio",
              "Graduação",
              "Ensino Técnico",
              "Pós-Graduação",
              "MBA",
              "Mestrado",
              "Doutorado",

            ]}
          />


        </div>

        <div className="flex-col items-center w-3/4 px-6 ">
          <h2 className="text-primary text-left mb-7 font-bold text-xl">
            {vagas.length} Vagas para PCD encontradas
          </h2>



          <ListaHorizontal>
            {vagas.map((vaga) => (
              <CardLancamento
                key={vaga.id} // Usando o ID único do curso
                title={vaga.titulo}
                descricao={vaga.descricao}
                imagem={vaga.imagem}
                onpres={() => { }} // Função chamada quando um curso é selecionado
                button="Visualizar"
              />
            ))}
          </ListaHorizontal>

          <h2 className="text-primary text-left mb-7 font-bold text-xl mt-5">
            Inclusão começa com oportunidade
          </h2>


          {vagas.map((vaga) => (

            <CardVagas
              key={vaga.id}
              titulo={vaga.titulo}
              descricao={vaga.descricao}
              imagem={vaga.imagem}
              localizacao={vaga.localizacao}
              valor={vaga.valor}
              exclusividade={vaga.exclusividade}
              tipo={vaga.tipo}
              visible={visible}
              onEditarClick={() => navigate(`/vagas/adicionar/${vaga.id}`)}
              onExcluirClick={() => onExcluirClick(vaga.id)}
            />

          ))}

        </div>
      </div>
      <Footer />
    </div>

  );
}
