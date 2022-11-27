import React, {FC} from 'react';
import SectionTop from "../../sections/section_top/SectionTop";
import double_window_bg from "../../assets/images/double_window_bg.png"
import guarant_window_left from "../../assets/images/guarant-window-left.png"
import guarant_window_right from "../../assets/images/guarant-window-right.png"
import Button from "../../components/button/Button";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import SectionWindowsDelivery from "../../sections/section_windows_delivery/SectionWindowsDelivery";
import order from "../../assets/images/order-bg.png";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

const DoubleWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={double_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>DOUBLE WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Two operable sashes move vertically in the frame
                    and counterbalance mechanisms hold
                    the sash open or closed. Double hung windows
                    are easy to clean because of the variety
                    of ways that you can tilt and open them
                    – this is especially convenient for homes
                    with more than one level. Global Window NYC double hung windows offer
                    a lifetime of beauty and comfort.
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

export default DoubleWindow;