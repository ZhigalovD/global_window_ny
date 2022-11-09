import React, {FC} from 'react';
import awning_window_bg from "../../assets/images/awning_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

const AwningWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={awning_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>AWNING WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Awning windows are versatile to fit many different styles and rooms around the home. They can be installed higher up on a wall to maintain privacy or lower on a wall for easy operation. Awning windows are extremely energy efficient, especially since wind blowing on the outside can create an even tighter seal.
                    At GLOBAL WINDOW NY, we'll find the perfect window to meet all your needs and you're sure to be satisfied
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
        </div>
    );
};

export default AwningWindow;