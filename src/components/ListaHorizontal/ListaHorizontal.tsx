import React, { ReactNode } from "react";
import Slider from "react-slick"; // Importando o Slider do React Slick

// Importando os estilos do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Definindo o tipo das props que o componente ListaHorizontal receberá
interface ListaHorizontalProps {
    children: ReactNode;
}

export const ListaHorizontal = ({ children }: ListaHorizontalProps) => {
    // Configurações do carrossel (Slider)
    const slickSettings = {
        dots: true, // Exibe os pontos de navegação
        infinite: false, // Habilita rotação infinita
        speed: 700, // Velocidade da transição entre os slides
        slidesToShow: 2.6, // Número de slides visíveis
        slidesToScroll: 1, // Número de slides que será rolado a cada interação
        centerMode: false, // Centraliza os itens no carrossel

    };

    return (
        <div className="max-w-screen-lg mx-auto mb-7">
            {/* Slider com as configurações do React Slick */}
            <Slider {...slickSettings}>
                {children}
            </Slider>
        </div>
    );
};
