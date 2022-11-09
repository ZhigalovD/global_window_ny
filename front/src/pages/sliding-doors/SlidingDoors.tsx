import React, {FC} from 'react';
import sliding_doors_bg from "../../assets/images/sliding_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

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
        </div>
    );
};

export default SlidingDoors;