import React, {FC} from 'react';
import classes from "./Footer.module.scss";
import merlin from "../../../assets/images/merlin_38890910-2.jpeg"
import { PhoneOutlined, FacebookOutlined, InstagramOutlined, GlobalOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.svg"

const Footer: FC = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__top}>
                <div className="container">
                    <div className={classes.footer__about_block}>
                        <div className={classes["footer__about_block--text"]}>
                            <h2>ABOUT THE COMPANY</h2>
                            <p>GLOBAL WINDOW NY, INC is a young team of professionals. We closely follow all trends and implement them. When you work with us, we assure that you will get the best results. You will be definitely satisfied.</p>
                            <p className={classes.office_hours}>OFFICE HOURS</p>
                            <p>Monday-Friday 9:00am - 7:00pm</p>
                            <p>Saturday 9:00am - 5:00pm</p>
                            <p>Sunday CLOSED</p>
                        </div>
                        <div className={classes["footer__about_block--image"]}>
                            <img src={merlin} alt=""/>
                        </div>
                    </div>
                    <div className={classes.footer__contacts}>
                        <div className={classes["footer__contacts_left"]}>
                            <p className={classes["footer__contacts--title"]}>
                                DO YOU HAVE ANY QUESTIONS? <br/>
                                PLEASE CONTACT US
                            </p>
                            <div className={classes["footer__contacts_wrap"]}>
                                <a href="tel:+19294166262" className={classes["footer__contacts_wrap_item"]}>
                                    <PhoneOutlined style={{fontSize: "30px"}} />
                                    <p>+19294166262</p>
                                </a>
                                <a href="https://www.facebook.com/GlobalWindowNewYork?roistat_visit=972800" className={classes["footer__contacts_wrap_item"]}>
                                    <FacebookOutlined style={{fontSize: "30px"}} />
                                    <p>GlobalWindowNY</p>
                                </a>
                                <a href="https://www.instagram.com/global_window_ny/?roistat_visit=972800" className={classes["footer__contacts_wrap_item"]}>
                                    <InstagramOutlined style={{fontSize: "30px"}} />
                                    <p>@GlobalWindowNY</p>
                                </a>
                            </div>
                        </div>
                        <div className={classes["footer__contacts_right"]}>
                            <p className={`${classes["footer__contacts--title"]} ${classes["footer__contacts--title-desktop"]}`}>
                                ALSO WE ARE WAITING FOR YOU <br/>
                                AT OUR OFFICE AT
                            </p>
                            <div className={classes["footer__contacts_wrap"]}>
                                <div className={classes["footer__contacts_wrap_item"]}>
                                    <GlobalOutlined style={{fontSize: "30px"}} />
                                    <div>
                                        <p>24 E 91st St New York,</p>
                                        <p>NY 10128</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer__bottom}>
                <div className="container">
                    <div className={classes.footer__bottom_wrap}>
                        <div className={classes.footer__logo}>
                            <img src={logo} alt=""/>
                        </div>
                        <div>
                            <a href="">Privacy policy</a>
                            <span className={"mobile"}>2022. All rights reserved</span>
                        </div>
                        <span className={"desktop"}>2022. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;