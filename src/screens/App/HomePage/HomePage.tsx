import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { TopicHome } from "../../../components/TopicHome/TopicHome";
import topic_01 from "../../../assets/images/topic_01.png";
import topic_02 from "../../../assets/images/topic_02.png";
import topic_03 from "../../../assets/images/topic_03.png";
import statue_of_liberty from "../../../assets/images/statue_of_liberty.png";
import logo_footer from "../../../assets/images/logo_footer.png";

export function HomePage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <Navbar />
      <main className="flex flex-col h-full w-full pt-36">
        <header className="mb-[100px]">
          <h2 className="text-primary font-bold text-3xl text-center">
            Navegue com a Segurança Proporcionada pelos <br /> Melhores Recursos
            de Acessibilidade
          </h2>
        </header>

        <section className="flex justify-center gap-44">
          <TopicHome
            description="Entenda as principais leis que garantem os direitos das pessoas com deficiência, com explicações claras e objetivas sobre acessibilidade, saúde, educação e muito mais."
            imageUrl={topic_01}
            title="TÓPICOS JURÍDICOS"
          />

          <TopicHome
            description="Entenda as principais leis que garantem os direitos das pessoas com deficiência, com explicações claras e objetivas sobre acessibilidade, saúde, educação e muito mais."
            imageUrl={topic_02}
            title="TÓPICOS JURÍDICOS"
          />

          <TopicHome
            description="Entenda as principais leis que garantem os direitos das pessoas com deficiência, com explicações claras e objetivas sobre acessibilidade, saúde, educação e muito mais."
            imageUrl={topic_03}
            title="TÓPICOS JURÍDICOS"
          />
        </section>

        <section className="flex items-center justify-center flex-col">
          <h2 className="mt-[100px] mb-[60px] font-bold text-3xl text-primary">
            Acessibilidade sem limites
          </h2>
          <div className="flex gap-20 mb-[140px]">
            <div className="bg-primary w-[400px] h-[333px] rounded-2xl flex justify-center items-center flex-col ">
              <p className="font-bold text-lg mt-[10px]  text-white">
                VAGAS INCLUSIVAS PARA
              </p>
              <p className="font-bold text-[40px] mb-[10px] text-white">PCD</p>
              <p className="px-[25px] text-white mb-[20px]">
                Explore as principais vagas de emprego voltadas para pessoas com
                deficiência. Veja como se candidatar e conheça empresas que
                promovem a inclusão no mercado de trabalho.
              </p>
              <button className="bg-white w-[150px] h-[49px] rounded-[10px] font-bold text-primary">
                Saiba mais
              </button>
            </div>

            <div className="relative bg-sunshine w-[400px] h-[333px] rounded-2xl flex justify-center items-center flex-col overflow-hidden">
              <img
                className="absolute left-6 top-0 h-full object-cover translate-x-[-20%]" // Ajuste de opacidade e posição
                src={statue_of_liberty}
                alt="statue of liberty"
              />
              <p className="font-bold text-lg mt-[10px] text-primary z-10">
                CURSOS GRATUITOS PARA
              </p>
              <p className="font-bold text-[40px] mb-[10px] text-primary z-10">
                PCD
              </p>
              <p className="px-[15px] text-primary mb-[20px] z-10">
                Descubra cursos voltados para o desenvolvimento pessoal e
                profissional de pessoas com deficiência. Aprenda novas
                habilidades com conteúdos acessíveis e inclusivos.
              </p>
              <button className="bg-white w-[150px] h-[49px] rounded-[10px] font-bold text-primary z-10">
                Saiba mais
              </button>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center flex-col px-[180px] text-left">
          <h2 className="font-bold mb-[19px] text-primary text-3xl ">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-primary font-medium text-xl mb-16">
            Nossa plataforma foi criada com o objetivo de facilitar o acesso às
            informações sobre direitos, oportunidades de trabalho, e cursos
            dedicados a pessoas com deficiência. Desenvolvida por especialistas
            comprometidos com a inclusão, oferecemos um espaço acessível e
            seguro para todos. <br /> <br />
            Com base em um profundo conhecimento das necessidades de pessoas com
            deficiência, nossa plataforma reúne conteúdo relevante, sempre com
            foco na personalização e acessibilidade. Seja para entender seus
            direitos, encontrar cursos inclusivos ou explorar vagas de emprego,
            aqui você terá acesso a informações claras e ferramentas que
            priorizam a inclusão e a excelência no atendimento.
          </p>
          <button className="font-medium text-sm text-white px-[70px] py-[30px] rounded-md bg-primary mb-[100px]">
            Consulte nosso FAQ e esclareça suas dúvidas!
          </button>
        </section>

        <footer className="bg-gray h-[260px] flex items-center justify-center p-4 gap-8">
          <img
            className="object-cover h-full" // Ajuste para caber melhor
            src={logo_footer}
            alt="logo footer"
          />
          <div className="ml-4 flex flex-col w-[600px] ">
            <h2 className="text-xl font-bold mb-2 text-primary">
              Receba nossas promoções e novidades em seu e-mail!
            </h2>
            <div className="flex justify-between mb-2  border-[3px] border-primary rounded-md">
              <input
                type="email"
                name="receber_promo"
                id="receber_promo"
                className="px-2 py-1 border-none  rounded-md focus:outline-none focus:border-transparent w-screen"
                placeholder="Digite seu e-mail"
                required
              />
              <button className="bg-primaryPurple text-white font-bold px-4 py-1 hover:bg-primary">
                Cadastrar
              </button>
            </div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2 "
              />
              <span className="text-sm text-gray01">
                Ao clicar em cadastrar, concordo que li e aceito os
                <a href="" className="text-black underline">
                  {" "}
                  Termos de Uso
                </a>
                ,
                <a href="" className="text-black underline">
                  {" "}
                  Condições Gerais do Seguro
                </a>{" "}
                e
                <a href="" className="text-black underline">
                  Cobertura do produto.
                </a>
              </span>
            </label>
          </div>
        </footer>
      </main>
    </div>
  );
}
