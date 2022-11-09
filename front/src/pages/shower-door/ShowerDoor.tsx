import React, {FC} from 'react';
import shower_door_bg from "../../assets/images/shower_door_bg.jpeg";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

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
        </div>
    );
};

export default ShowerDoor;