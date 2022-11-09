import React, {FC} from 'react';
import interior_doors_bg from "../../assets/images/interior_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

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
        </div>
    );
};

export default InteriorDoors;