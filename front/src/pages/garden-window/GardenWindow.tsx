import React, {FC} from 'react';
import garden_window_bg from "../../assets/images/garden_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

const GardenWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={garden_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>GARDEN WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    GLOBAL WINDOW NY offers garden windows designed to add character and dimension to your home’s exterior. They’re designed to project outward from your home, creating a place to show off decorative pieces or a year-round greenhouse to grow plants and herbs.
                    Garden windows are great for your kitchen, featuring operable windows on each side for added ventilation.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
        </div>
    );
};

export default GardenWindow;