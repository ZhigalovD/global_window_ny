import React, {FC} from 'react';
import awning_window_bg from "../../assets/images/awning_window_bg.png";
import order from "../../assets/images/order-bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import SectionWindowsDelivery from "../../sections/section_windows_delivery/SectionWindowsDelivery";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

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

export default AwningWindow;