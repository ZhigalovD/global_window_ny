import React, {FC} from 'react';
import unstandart_window_bg from "../../assets/images/unstandart_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";

const UnstandartWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={unstandart_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>UNSTANDART WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Non-standard window is primarily exclusive shape allowing to implement a wide range of design solutions -round, triangular, arched windows, trapezoid, etc.
                    and to increase the light filling of the room.
                    GLOBAL WINDOW NY, INK has special equipment that allows to produce plastic windows with not straight sides and in our factory work professionals with extensive experience in production and installation
                    of nonstandard and arched windows.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
            <SectionGuarantee
                imgLeft={guarant_window_left}
                imgRight={guarant_window_right}
                installation_periods={1}
                on_products_years={10}
            />
        </div>
    );
};

export default UnstandartWindow;