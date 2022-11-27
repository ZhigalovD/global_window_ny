import React, {FC} from 'react';
import sliding_doors_bg from "../../assets/images/sliding_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import install_door from "../../assets/images/install_door.jpeg";
import install_door_right from "../../assets/images/install_door_right.jpeg";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import Sliding_Door from "../../assets/images/Easy_Sliding_Door_with_Side_Panel_LR.jpg";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

const SlidingDoors: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={sliding_doors_bg}>
                <h1 className={"section_top__title"}>
                    <p>SLIDING DOOR</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Stylish sliding doors are an excellent choice
                    for narrow openings or hallways around your home,
                    where space for a hinged door is limited,
                    but they can also make a stunning decorative
                    feature when used to separate larger,
                    open plan spaces.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
            <SectionGuarantee
                imgLeft={install_door}
                imgRight={install_door_right}
                installation_periods={5}
                on_products_years={20}
            />
            <SectionSlider forOrder={"doorSlide"} />
            <SectionContactUs forOrder="door" backgroundOrder={Sliding_Door} />
        </div>
    );
};

export default SlidingDoors;