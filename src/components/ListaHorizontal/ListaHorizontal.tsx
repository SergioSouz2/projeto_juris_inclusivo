import React, { ReactNode } from "react";
import Slider from "react-slick"; // Importando o Slider do React Slick

// Importando os estilos do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


// Definindo o tipo das props que o componente ListaHorizontal receberá
interface ListaHorizontalProps {
    children: ReactNode;
}


export const ListaHorizontal = ({ children }: ListaHorizontalProps) => {
    // Configurações do carrossel (Slider)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="">
            {/* Slider com as configurações do React Slick */}
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};
