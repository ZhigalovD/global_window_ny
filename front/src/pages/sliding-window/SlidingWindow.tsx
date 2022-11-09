import React, {FC} from 'react';
import sliding_window_bg from "../../assets/images/sliding_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

const SlidingWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={sliding_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>SLIDING WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Sliding windows glide open horizontally from one side to the other. Sliding on a track, they require no extra space to operate making them a popular choice along patios, porches, tight walkways or anywhere you wouldn’t want an outward swinging window.
                    Sliding windows offer easy and controlled access
                    to fresh air and provide excellent energy
                    efficiency when closed.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
        </div>
    );
};

export default SlidingWindow;