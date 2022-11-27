import React, {FC} from 'react';
import garden_window_bg from "../../assets/images/garden_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import SectionWindowsDelivery from "../../sections/section_windows_delivery/SectionWindowsDelivery";
import order from "../../assets/images/order-bg.png";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

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

export default GardenWindow;