import React, {FC} from 'react';
import entry_doors_bg from "../../assets/images/entry_doors_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

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
        </div>
    );
};

export default EntryDoors;