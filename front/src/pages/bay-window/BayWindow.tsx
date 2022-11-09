import React, {FC} from 'react';
import bay_window_bg from "../../assets/images/bay_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

const BayWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={bay_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>BAY WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Bay windows combine fixed and operable windows, creating a curve that extends beyond the exterior walls. Bay windows maximize interior space
                    by protruding out from a home’s exterior. They also provide additional natural light and greater airflow, broadening the feel of a room with panoramic views and depth. Bring more light into your home
                    with GLOBAL WINDOW NY.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
        </div>
    );
};

export default BayWindow;