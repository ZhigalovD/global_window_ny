import React, {FC} from 'react';
import delivery from "../../assets/images/delivery-bg.png"

const SectionWindowsDelivery: FC = () => {
    return (
        <div className={"section_windows_delivery"}>
            <div className="container">
                <div className={"section_windows_delivery__content"}>
                    <div className="section_windows_delivery__title">
                        <p>FAST DELIVERY</p>
                        <p>AND INSTALLATION</p>
                        <span>
                            You won't have to wait months for delivery.
                            We will install the windows in the shortest possible time.
                        </span>
                    </div>
                    <div className={"section_windows_delivery__car"}>
                        <img src={delivery} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWindowsDelivery;