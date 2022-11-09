import React, {FC} from 'react';
import storm_doors_bg from "../../assets/images/storm_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import install_door from "../../assets/images/install_door.jpeg";
import install_door_right from "../../assets/images/install_door_right.jpeg";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";

const StormDoors: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={storm_doors_bg}>
                <h1 className={"section_top__title"}>
                    <p>STORM DOOR</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    No matter what the season,
                    protect your home in style with a storm door.
                    GLOBAL WINDOW NY design storm doors
                    and screen doors to make your life easier,
                    with styles, options and features
                    to fit your needs.
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

export default StormDoors;