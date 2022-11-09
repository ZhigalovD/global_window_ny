import React, {FC} from 'react';
import SectionTop from "../../sections/section_top/SectionTop";
import vinyl_window_bg from "../../assets/images/vinyl_window_bg.png";
import Button from "../../components/button/Button";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";

const VinylWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={vinyl_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>VINYL WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Vinyl windows are high quality, energy efficient
                    and budget friendly. Because they never need painting or refinishing, they are low maintenance and easy
                    to care for. The vinyl formula allows for excellent weathering and color retention. With fully-welded sashes and frames, vinyl windows are strong and durable, too.
                    Choose from a variety of colors to complement the aesthetic of your home.
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

export default VinylWindow;