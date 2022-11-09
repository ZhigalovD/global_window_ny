import React, {FC} from 'react';
import storm_doors_bg from "../../assets/images/storm_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

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
        </div>
    );
};

export default StormDoors;