import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { CardDireito } from "../../../components/CardDireito/CardDireito";
import { getFormData } from "../../../services/direitoFocoService";
import { Footer } from "../../../components/Footer/Footer";



export function DireitoFocoScreen() {

  const card = {
    name: 'Yanna maria',
    imageProfile: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma',
    imagem: 'https://img.freepik.com/fotos-gratis/especialistas-em-negocios-multietnicos-de-sucesso-analisam-o-relatorio-de-marketing-verificam-a-documentacao-com-expressoes-serias-posam-perto-do-peitoril-da-janela-usam-roupas-da-moda-bebem-bebidas-aromaticas_273609-28957.jpg?t=st=1731584108~exp=1731587708~hmac=557fcb84f663758ab7fce9c0cc22df7dd1f3629be5b62f1a1a9a86fa1886b4b8&w=1380',
  }

  const [direitos, setDireito] = useState<any[] | null>([]);

  async function fetchDireito() {
    const result = await getFormData()
    setDireito(result);

  }


  useEffect(() => {
    fetchDireito();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-[300px] min-h-screen bg-gray-200">
          <Menu
            title="Outros Tópicos"
            items={[
              "Curatela e TDA",
              "Direito à Saúde ",
              "Isenções ",
              "Previdenciário ",
              "Acessibilidade ",
              "Educação Inclusiva",
              "Servidores Públicos ",

            ]}
          />
        </div>
        <div className="flex-1 flex flex-wrap gap-5 p-5 overflow-y-auto">

          {
            direitos?.map((direito) => (
              <CardDireito
                name={direito.perfil}
                descricao={direito.descricao}
                imagem={direito.imagem}
              />
            ))
          }

        </div>
      </div>
      <Footer />
    </div>
  );
}
