import React, {FC} from 'react';
import casement_window_bg from "../../assets/images/casement_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import SectionWindowsDelivery from "../../sections/section_windows_delivery/SectionWindowsDelivery";
import order from "../../assets/images/order-bg.png";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

const CasementWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={casement_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>CASEMENT WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Sash windows can be used in any style of home.
                    Sleek window frames can give a modern look with unobstructed, large glass. If you prefer a traditional style, the addition of a lattice can add interest
                    to a timeless design by separating the light entering
                    the room. With Global Window NYC, you're sure
                    to find a solution that's right for you.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
            <SectionGuarantee
                imgLeft={guarant_window_left}
                imgRight={guarant_window_right}
                installation_periods={1}
                on_products_years={10}
            />
            <SectionSlider forOrder={"windowSlide"} />
            <SectionWindowsDelivery />
            <SectionContactUs forOrder="window" backgroundOrder={order} />
        </div>
    );
};

export default CasementWindow;