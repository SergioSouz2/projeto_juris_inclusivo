import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { supabase } from "../../../services/supabaseClient";
import { CardVagas } from "../../../components/CardVagas/CardVagas";
import { ListaHorizontal } from "../../../components/ListaHorizontal/ListaHorizontal";
import { CardLancamento } from "../../../components/CardLancamento/CardLancamento";
import { Link } from "react-router-dom";
import useUserData from "../../../hook/useUserData";
import { deleteVaga, getAllVagas } from "../../../services/VagasService";
import { Alert } from "@mui/material";
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

  const [vagas, setVagas] = useState<VagasProps[]>([]);
  const fetchVagas = async () => {
    try {
      const { data, error } = await supabase.from("vagas").select("*");
      setVagas(data as VagasProps[]);
    } catch (err) {
      console.error("Erro ao buscar Vagas:", err);
    }
  };


  function onEditarClick() {

  }

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
    <div className="w-screen overflow-x-hidden"> {/* Impede o scroll horizontal */}
      <Navbar />
      <div className="flex flex-wrap"> {/* Flexbox que se ajusta responsivamente */}
        <div className="flex-shrink-0 w-1/4">
          <Menu /> {/* Menu com largura fixa, ajustando para a tela */}
        </div>

        <div className="flex-1 flex-col items-center w-3/4 px-6 ">
          <h2 className="text-primary text-left mb-7 font-bold text-xl">
            {vagas.length} Vagas para PCD encontradas
          </h2>
          <div className="flex justify-end mr-10 mb-10">
            <button className="px-4 py-1 rounded-md border border-primary bg-primaryPurple hover:bg-primary hover:text-white text-primary">
              <Link to="/vagas/adicionar">Adiconar</Link>
            </button>
          </div>


          <ListaHorizontal>
            {vagas.map((vaga) => (
              <CardLancamento
                key={vaga.id} // Usando o ID único do curso
                title={vaga.titulo}
                descricao={vaga.descricao}
                imagem={vaga.imagem}
                onpres={() => { }} // Função chamada quando um curso é selecionado
              />
            ))}
          </ListaHorizontal>

          <h2 className="text-primary text-left mb-7 font-bold text-xl">
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
              onEditarClick={onEditarClick}
              onExcluirClick={() => onExcluirClick(vaga.id)}
            />

          ))}

        </div>
      </div>
      <Footer />
    </div>

  );
}
