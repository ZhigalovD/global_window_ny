import React, {FC} from 'react';
import Slider from "react-slick";
import windowSlide1 from "../../assets/images/window_slider/1.jpeg";
import windowSlide2 from "../../assets/images/window_slider/2.jpeg";
import windowSlide3 from "../../assets/images/window_slider/3.jpeg";
import windowSlide4 from "../../assets/images/window_slider/4.jpeg";
import windowSlide5 from "../../assets/images/window_slider/5.jpeg";
import windowSlide6 from "../../assets/images/window_slider/6.jpeg";
import windowSlide7 from "../../assets/images/window_slider/7.jpeg";
import windowSlide8 from "../../assets/images/window_slider/8.jpeg";
import windowSlide9 from "../../assets/images/window_slider/9.jpg";
import windowSlide10 from "../../assets/images/window_slider/10.jpeg";
import windowSlide11 from "../../assets/images/window_slider/11.jpeg";
import windowSlide12 from "../../assets/images/window_slider/12.jpg";
import windowSlide13 from "../../assets/images/window_slider/13.jpg";
import windowSlide14 from "../../assets/images/window_slider/14.jpg";
import windowSlide15 from "../../assets/images/window_slider/15.jpg";
import windowSlide16 from "../../assets/images/window_slider/16.jpg";
import windowSlide17 from "../../assets/images/window_slider/17.jpg";
import windowSlide18 from "../../assets/images/window_slider/18.jpg";
import windowSlide19 from "../../assets/images/window_slider/19.jpg";
import windowSlide20 from "../../assets/images/window_slider/20.jpg";
import windowSlide21 from "../../assets/images/window_slider/21.jpg";
import windowSlide22 from "../../assets/images/window_slider/22.jpg";
import windowSlide23 from "../../assets/images/window_slider/23.jpg";
import windowSlide24 from "../../assets/images/window_slider/24.jpg";
import windowSlide25 from "../../assets/images/window_slider/25.jpg";
import windowSlide26 from "../../assets/images/window_slider/26.jpg";
import windowSlide27 from "../../assets/images/window_slider/27.jpg";
import windowSlide28 from "../../assets/images/window_slider/28.jpg";
import windowSlide29 from "../../assets/images/window_slider/29.jpg";
import windowSlide30 from "../../assets/images/window_slider/30.jpg";
import windowSlide31 from "../../assets/images/window_slider/31.jpg";
import windowSlide32 from "../../assets/images/window_slider/32.jpg";
import windowSlide33 from "../../assets/images/window_slider/33.jpg";
import windowSlide34 from "../../assets/images/window_slider/34.jpg";
import windowSlide35 from "../../assets/images/window_slider/35.jpg";
import windowSlide36 from "../../assets/images/window_slider/36.jpg";
import windowSlide37 from "../../assets/images/window_slider/37.jpg";
import doorSlide1 from "../../assets/images/door_slider/1.jpeg";
import doorSlide2 from "../../assets/images/door_slider/2.jpeg";
import doorSlide3 from "../../assets/images/door_slider/3.jpeg";
import doorSlide4 from "../../assets/images/door_slider/4.jpeg";
import doorSlide5 from "../../assets/images/door_slider/5.jpeg";
import doorSlide6 from "../../assets/images/door_slider/6.jpeg";
import doorSlide7 from "../../assets/images/door_slider/7.jpeg";
import doorSlide8 from "../../assets/images/door_slider/8.jpeg";
import doorSlide9 from "../../assets/images/door_slider/9.jpeg";
import doorSlide10 from "../../assets/images/door_slider/10.jpeg";
import doorSlide11 from "../../assets/images/door_slider/11.jpeg";
import doorSlide12 from "../../assets/images/door_slider/12.jpeg";
import doorSlide13 from "../../assets/images/door_slider/13.jpeg";
import doorSlide14 from "../../assets/images/door_slider/14.jpeg";
import doorSlide15 from "../../assets/images/door_slider/15.jpeg";
import doorSlide16 from "../../assets/images/door_slider/16.jpeg";
import doorSlide17 from "../../assets/images/door_slider/17.jpeg";
import doorSlide18 from "../../assets/images/door_slider/18.jpeg";
import doorSlide19 from "../../assets/images/door_slider/19.jpeg";
import doorSlide20 from "../../assets/images/door_slider/20.jpeg";
import doorSlide21 from "../../assets/images/door_slider/21.jpeg";
import doorSlide22 from "../../assets/images/door_slider/22.jpeg";
import doorSlide23 from "../../assets/images/door_slider/23.jpeg";
import doorSlide24 from "../../assets/images/door_slider/24.jpeg";
import doorSlide25 from "../../assets/images/door_slider/25.jpeg";
import doorSlide26 from "../../assets/images/door_slider/26.jpeg";
import doorSlide27 from "../../assets/images/door_slider/27.jpeg";
import doorSlide28 from "../../assets/images/door_slider/28.jpeg";
import doorSlide29 from "../../assets/images/door_slider/29.jpeg";
import doorSlide30 from "../../assets/images/door_slider/30.jpeg";
import doorSlide31 from "../../assets/images/door_slider/31.jpeg";

const windowSlide = [
    {id: 1, src: windowSlide1},
    {id: 2, src: windowSlide2},
    {id: 3, src: windowSlide3},
    {id: 4, src: windowSlide4},
    {id: 5, src: windowSlide5},
    {id: 6, src: windowSlide6},
    {id: 7, src: windowSlide7},
    {id: 8, src: windowSlide8},
    {id: 9, src: windowSlide9},
    {id: 10, src: windowSlide10},
    {id: 11, src: windowSlide11},
    {id: 12, src: windowSlide12},
    {id: 13, src: windowSlide13},
    {id: 14, src: windowSlide14},
    {id: 15, src: windowSlide15},
    {id: 16, src: windowSlide16},
    {id: 17, src: windowSlide17},
    {id: 18, src: windowSlide18},
    {id: 19, src: windowSlide19},
    {id: 20, src: windowSlide20},
    {id: 21, src: windowSlide21},
    {id: 22, src: windowSlide22},
    {id: 23, src: windowSlide23},
    {id: 24, src: windowSlide24},
    {id: 25, src: windowSlide25},
    {id: 26, src: windowSlide26},
    {id: 27, src: windowSlide27},
    {id: 28, src: windowSlide28},
    {id: 29, src: windowSlide29},
    {id: 30, src: windowSlide30},
    {id: 31, src: windowSlide31},
    {id: 32, src: windowSlide32},
    {id: 33, src: windowSlide33},
    {id: 34, src: windowSlide34},
    {id: 35, src: windowSlide35},
    {id: 36, src: windowSlide36},
    {id: 37, src: windowSlide37}
]

const doorSlide = [
    {id: 1, src: doorSlide1},
    {id: 2, src: doorSlide2},
    {id: 3, src: doorSlide3},
    {id: 4, src: doorSlide4},
    {id: 5, src: doorSlide5},
    {id: 6, src: doorSlide6},
    {id: 7, src: doorSlide7},
    {id: 8, src: doorSlide8},
    {id: 9, src: doorSlide9},
    {id: 10, src: doorSlide10},
    {id: 11, src: doorSlide11},
    {id: 12, src: doorSlide12},
    {id: 13, src: doorSlide13},
    {id: 14, src: doorSlide14},
    {id: 15, src: doorSlide15},
    {id: 16, src: doorSlide16},
    {id: 17, src: doorSlide17},
    {id: 18, src: doorSlide18},
    {id: 19, src: doorSlide19},
    {id: 20, src: doorSlide20},
    {id: 21, src: doorSlide21},
    {id: 22, src: doorSlide22},
    {id: 23, src: doorSlide23},
    {id: 24, src: doorSlide24},
    {id: 25, src: doorSlide25},
    {id: 26, src: doorSlide26},
    {id: 27, src: doorSlide27}
]

const showerDoorSlide = [
    {id: 1, src: doorSlide28},
    {id: 2, src: doorSlide29},
    {id: 3, src: doorSlide30},
    {id: 4, src: doorSlide31}
]

interface Props {
    forOrder: string;
}

const SectionSlider:FC<Props> = ({forOrder}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={"section_slider"}>
            <div className="container">
                <div className={"section_slider__content"}>
                    <div className={"section_slider__top"}>
                        <p>PHOTOS OF COMPLETED WORKS</p>
                    </div>
                    <Slider {...settings}>
                        {forOrder === "windowSlide" && windowSlide.map(item => <div key={item.id} ><img src={item.src} alt=""/></div>)}
                        {forOrder === "doorSlide" && doorSlide.map(item => <div key={item.id} ><img src={item.src} alt=""/></div>)}
                        {forOrder === "showerDoorSlide" && showerDoorSlide.map(item => <div key={item.id} ><img src={item.src} alt=""/></div>)}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SectionSlider;