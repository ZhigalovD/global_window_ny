import React, {FC} from 'react';
import interior_doors_bg from "../../assets/images/interior_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import install_door from "../../assets/images/install_door.jpeg";
import install_door_right from "../../assets/images/install_door_right.jpeg";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";

const InteriorDoors: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={interior_doors_bg}>
                <h1 className={"section_top__title"}>
                    <p>INTERIOR DOOR</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Interior doors don't just divide rooms
                    and provide privacy, they define the decor
                    and character of a home, providing warmth,
                    beauty and functionality. From traditional options
                    with scalloped and flat panels to shutter doors,
                    French doors or practical accordion doors,
                    there's a style to suit your needs.
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

export default InteriorDoors;