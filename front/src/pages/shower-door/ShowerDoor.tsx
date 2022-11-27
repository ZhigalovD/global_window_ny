import React, {FC} from 'react';
import shower_door_bg from "../../assets/images/shower_door_bg.jpeg";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import install_door from "../../assets/images/install_door.jpeg";
import install_door_right from "../../assets/images/install_door_right.jpeg";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";
import Sliding_Door from "../../assets/images/Easy_Sliding_Door_with_Side_Panel_LR.jpg";
import SectionContactUs from "../../sections/section_contact_us/SectionContactUs";
import SectionSlider from "../../sections/section_slider/SectionSlider";

const ShowerDoor: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={shower_door_bg}>
                <h1 className={"section_top__title"}>
                    <p>SHOWER DOOR</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Glass shower doors look luxurious,
                    plus they increase bathroom space
                    and are even less prone to mold and mildew
                    than traditional plastic or vinyl curtains.
                    Rejuvenate your bathroom today with a bit of help
                    from GLOBAL WINDOW NY,
                    your source for beautiful glass shower doors.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
            <SectionGuarantee
                imgLeft={install_door}
                imgRight={install_door_right}
                installation_periods={5}
                on_products_years={20}
            />
            <SectionSlider forOrder={"showerDoorSlide"} />
            <SectionContactUs forOrder="door" backgroundOrder={Sliding_Door} />
        </div>
    );
};

export default ShowerDoor;