import React, {FC} from 'react';
import Button from "../../components/button/Button";

interface Props {
    forOrder: "window" | "door";
    backgroundOrder: string;
}

const SectionContactUs:FC<Props> = ({ forOrder, backgroundOrder }) => {
    return (
        <div className={"section_contact_us"}>
            <div className="container">
                <div className={"section_contact_us__content"}  style={{ backgroundImage: `url(${backgroundOrder})` }}>
                    <div className="section_contact_us__title_wrap">
                        <div className="section_contact_us__title">
                            <p>IT'S TIME</p>
                            {forOrder === "window" && <p>TO CHANGE</p>}
                            {forOrder === "window" && <p>WINDOWS</p>}
                            {forOrder === "door" && <p>TO MAKE</p>}
                            {forOrder === "door" && <p>THE BATHROOM</p>}
                            {forOrder === "door" && <p>PERFECT</p>}
                        </div>
                        <div className="section_contact_us__subtitle">
                            {forOrder === "window" && <p>CONTACT US</p>}
                            {forOrder === "window" && <p>AT GLOBAL WINDOW NY, INC.</p>}
                            {forOrder === "window" && <p>TODAY</p>}
                            {forOrder === "door" && <p>GET A QUOTE</p>}
                            {forOrder === "door" && <p>FOR INSTALLING TOP</p>}
                            {forOrder === "door" && <p>QUALITY</p>}
                            {forOrder === "door" && <p>GLASS SOLUTIONS</p>}
                        </div>
                    </div>
                    <div className={"section_contact_us__right"}>
                        <Button>GET PRICE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionContactUs;