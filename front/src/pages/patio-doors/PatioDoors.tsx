import React, {FC} from 'react';
import patio_doors_bg from "../../assets/images/patio_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

const PatioDoors: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={patio_doors_bg}>
                <h1 className={"section_top__title"}>
                    <p>PATIO DOOR</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Connect with the world through brilliant,
                    beautiful, durable design.
                    Explore all of the options and see
                    how we can help you achieve
                    your vision.Choose between sliding,
                    swinging, or folding patio door designs.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
        </div>
    );
};

export default PatioDoors;