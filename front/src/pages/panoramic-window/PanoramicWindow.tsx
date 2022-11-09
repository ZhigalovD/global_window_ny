import React, {FC} from 'react';
import panoramic_window_bg from "../../assets/images/panoramic_window_bg.png";
import Button from "../../components/button/Button";
import SectionTop from "../../sections/section_top/SectionTop";

const PanoramicWindow: FC = () => {
    return (
        <div>
            <SectionTop backgroundImg={panoramic_window_bg}>
                <h1 className={"section_top__title"}>
                    <p>PANORAMIC WINDOW</p>
                </h1>
                <p className={"section_top__subtitle"}>
                    Large floor-to-ceiling panoramic windows make
                    the room visually larger, creating an atmosphere of luxury and comfort. Panoramic windows are a variant of glazing that occupies the entire wall or a significant part of it. This solution allows you to get a stunning view from the window. When choosing floor-to-ceiling aluminum or vinyl solutions, you need to consider the possibility of their installation.
                    This type of glazing is equally relevant in a private house or in multifamily buildings.
                </p>
                <Button className={"section_top__button"}>GET PRICE</Button>
            </SectionTop>
        </div>
    );
};

export default PanoramicWindow;