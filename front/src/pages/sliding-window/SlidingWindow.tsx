import React, {FC} from 'react';
import sliding_window_bg from "../../assets/images/sliding_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";
import guarant_window_left from "../../assets/images/guarant-window-left.png";
import guarant_window_right from "../../assets/images/guarant-window-right.png";
import SectionGuarantee from "../../sections/section_guarantee/SectionGuarantee";

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
            <SectionGuarantee
                imgLeft={guarant_window_left}
                imgRight={guarant_window_right}
                installation_periods={1}
                on_products_years={10}
            />
        </div>
    );
};

export default SlidingWindow;