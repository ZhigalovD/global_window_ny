import React, {FC} from 'react';
import entry_doors_bg from "../../assets/images/entry_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import install_door from "../../assets/images/install_door.jpeg";
import install_door_right from "../../assets/images/install_door_right.jpeg";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";

const EntryDoors: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={entry_doors_bg}>
                <h1 className={"section_top__title"}>
                    <p>ENTRY DOOR</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Your front door is a warm welcome
                    when you enter your home.
                    As your first and last impression,
                    your entry door signifies
                    for your creativity and style.
                    Bring beauty and quality to your home
                    with GLOBAL WINDOW NY, INC
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
            <SectionGuarantee
                imgLeft={install_door}
                imgRight={install_door_right}
                installation_periods={5}
                on_products_years={20}
            />
        </div>
    );
};

export default EntryDoors;