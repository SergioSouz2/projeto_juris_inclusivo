import React from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Menu } from "../../../components/Menu/Menu";
import { CardDireito } from "../../../components/CardDireito/CardDireito";

export function DireitoFocoScreen() {


  const card = {
    name: 'Yanna maria',
    imageProfile: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma',
    imagem: 'https://img.freepik.com/fotos-gratis/especialistas-em-negocios-multietnicos-de-sucesso-analisam-o-relatorio-de-marketing-verificam-a-documentacao-com-expressoes-serias-posam-perto-do-peitoril-da-janela-usam-roupas-da-moda-bebem-bebidas-aromaticas_273609-28957.jpg?t=st=1731584108~exp=1731587708~hmac=557fcb84f663758ab7fce9c0cc22df7dd1f3629be5b62f1a1a9a86fa1886b4b8&w=1380',
  }


  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex flex-wrap">
        <div className="">
          <Menu />
        </div>
        <div className="flex-1 w-2/3 mt-8">

          <CardDireito
            name={card.name}
            imageProfile={card.imageProfile}
            descricao={card.descricao}
            imagem={card.imagem}
          />

        </div>
      </div>
    </div>
  );
}
