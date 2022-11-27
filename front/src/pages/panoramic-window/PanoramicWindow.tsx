import React, {FC} from 'react';
import panoramic_window_bg from "../../assets/images/panoramic_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import SectionWindowsDelivery from "../../sections/section_windows_delivery/SectionWindowsDelivery";
import order from "../../assets/images/order-bg.png";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

const PanoramicWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={panoramic_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>PANORAMIC WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Large floor-to-ceiling panoramic windows make
                    the room visually larger, creating an atmosphere of luxury and comfort. Panoramic windows are a variant of glazing that occupies the entire wall or a significant part of it. This solution allows you to get a stunning view from the window. When choosing floor-to-ceiling aluminum or vinyl solutions, you need to consider the possibility of their installation.
                    This type of glazing is equally relevant in a private house or in multifamily buildings.
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

export default PanoramicWindow;