import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { supabase } from "../../../services/supabaseClient";
import { CardVagas } from "../../../components/CardVagas/CardVagas";
import { ListaHorizontal } from "../../../components/ListaHorizontal/ListaHorizontal";
import { CardLancamento } from "../../../components/CardLancamento/CardLancamento";



interface VagasProps {
  id: number;
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


  useEffect(() => {
    fetchVagas();
    console.log(vagas + "VAGAS OK");

  }, []);


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
              titulo={vaga.titulo}
              descricao={vaga.descricao}
              imagem={vaga.imagem}
              localizacao={vaga.localizacao}
              valor={vaga.valor}
              exclusividade={vaga.exclusividade}
              tipo={vaga.tipo}
            />

          ))}
        </div>
      </div>
    </div>

  );
}
