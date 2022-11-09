import React, {FC} from 'react';
import double_window_bg from "../../assets/images/double_window_bg.png"

interface Props {
    imgLeft?: string,
    imgRight?: string,
    on_products_years?: number
    installation_periods?: number
}

const SectionGuarantee: FC<Props> = ({installation_periods, on_products_years, imgLeft, imgRight}) => {
    return (
        <div>
            <div className={"section_guarantee"}>
                <div className="container">
                    <div className={"section_guarantee__content"}>
                        <div className={"section_guarantee__left"}>
                            <img src={imgLeft} alt=""/>
                            <div className="section_guarantee__item">
                                <div className="section_guarantee__title">
                                    <p>BUYING</p>
                                    <p>WITH US</p>
                                    <p>YOU GET</p>
                                </div>
                                <div className="section_guarantee__desc">
                                    <p>unique quality</p>
                                    <p>at an affordable price</p>
                                </div>
                            </div>
                        </div>
                        <div className={"section_guarantee__right"}>
                            <img src={imgRight} alt=""/>
                            <div className="section_guarantee-item">
                                <div className="section_guarantee__title">
                                    <p>GUARANTEE</p>
                                    <p>FOR ALL GOODS</p>
                                    <p>AND SERVICES</p>
                                </div>
                                <div className="section_guarantee__row">
                                    <div className="section_guarantee__info">
                                        <div className="section_guarantee__subtitle">
                                            <p>Factory guarantee</p>
                                            <p>on products</p>
                                        </div>
                                        <div className="section_guarantee__term"> {on_products_years} years</div>
                                    </div>
                                    <div className="section_guarantee__info">
                                        <div className="section_guarantee__subtitle">
                                            <p>Guarantee</p>
                                            <p>on the installation periods</p>
                                        </div>
                                        <div className="section_guarantee__term">{installation_periods} years</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionGuarantee;