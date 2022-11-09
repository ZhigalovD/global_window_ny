import React, {FC, useState} from 'react';
import classes from "./NavBar.module.scss"
import logo from "../../../assets/images/logo.svg"
import { Button, Drawer, Layout, Menu, Row } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../router";

const NavBar: FC = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const showDrawer = () => {
        setVisible(true)
    };
    const onClose = () => {
        setVisible(false)
    };

    return (
        <div className="container">
            <Layout.Header className={classes.navbar__header}>
                <Row className={classes["ant-row"]} >
                    <div className={classes.navbar__logo} onClick={() => navigate(RouteNames.MAIN)}>
                        <img src={logo} alt=""/>
                    </div>
                    <Menu className={classes.navbar__menu} mode={"horizontal"} selectable={false}>
                        <Menu.SubMenu className={classes["navbar__menu--sub"]} key={1} title="WINDOWS">
                            <Menu.Item key={2} onClick={() => navigate(RouteNames.DOUBLE_WINDOW)}>Double window</Menu.Item>
                            <Menu.Item key={3} onClick={() => navigate(RouteNames.VINYL_WINDOW)}>Vinyl window</Menu.Item>
                            <Menu.Item key={4} onClick={() => navigate(RouteNames.GARDEN_WINDOW)}>Garden window</Menu.Item>
                            <Menu.Item key={5} onClick={() => navigate(RouteNames.AWNING_WINDOW)}>Awning window</Menu.Item>
                            <Menu.Item key={6} onClick={() => navigate(RouteNames.UNSTANDART_WINDOW)}>Unstandart window</Menu.Item>
                            <Menu.Item key={7} onClick={() => navigate(RouteNames.SLIDING_WINDOW)}>Sliding window</Menu.Item>
                            <Menu.Item key={8} onClick={() => navigate(RouteNames.PANORAMIC_WINDOW)}>Panoramic window</Menu.Item>
                            <Menu.Item key={9} onClick={() => navigate(RouteNames.BAY_WINDOW)}>Bay window</Menu.Item>
                            <Menu.Item key={10} onClick={() => navigate(RouteNames.CASEMENT_WINDOW)}>Casement window</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu className={classes["navbar__menu--sub"]} key={11} title="DOORS">
                            <Menu.Item key={12} onClick={() => navigate(RouteNames.SHOWER_DOOR)}>Shower doors</Menu.Item>
                            <Menu.Item key={13} onClick={() => navigate(RouteNames.PATIO_DOORS)}>Patio doors</Menu.Item>
                            <Menu.Item key={14} onClick={() => navigate(RouteNames.SLIDING_DOORS)}>Sliding doors</Menu.Item>
                            <Menu.Item key={15} onClick={() => navigate(RouteNames.STORM_DOORS)}>Storm doors</Menu.Item>
                            <Menu.Item key={16} onClick={() => navigate(RouteNames.INTERIOR_DOORS)}>Interior doors</Menu.Item>
                            <Menu.Item key={17} onClick={() => navigate(RouteNames.ENTRY_DOORS)}>Entry doors</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item className={classes["navbar__menu--sub"]} key={18}>
                            REVIEWS
                        </Menu.Item>
                        <Menu.Item className={classes["navbar__menu--sub"]} key={19}>
                            COMPLETED WORKS
                        </Menu.Item>
                        <Menu.Item className={classes["navbar__menu--sub"]} key={20}>
                            CONTACTS
                        </Menu.Item>
                    </Menu>
                    <Button className="barsMenu" type="primary" onClick={showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer  title="Menu"
                             placement="right"
                             closable={false}
                             onClose={onClose}
                             open={visible}
                    >
                        <Menu mode={"inline"}>
                            <Menu.SubMenu className={classes["navbar__menu--sub"]} key={1} title="WINDOWS">
                                <Menu.Item key={2} onClick={() => navigate(RouteNames.DOUBLE_WINDOW)}>Double window</Menu.Item>
                                <Menu.Item key={3} onClick={() => navigate(RouteNames.VINYL_WINDOW)}>Vinyl window</Menu.Item>
                                <Menu.Item key={4} onClick={() => navigate(RouteNames.GARDEN_WINDOW)}>Garden window</Menu.Item>
                                <Menu.Item key={5} onClick={() => navigate(RouteNames.AWNING_WINDOW)}>Awning window</Menu.Item>
                                <Menu.Item key={6} onClick={() => navigate(RouteNames.UNSTANDART_WINDOW)}>Unstandart window</Menu.Item>
                                <Menu.Item key={7} onClick={() => navigate(RouteNames.SLIDING_WINDOW)}>Sliding window</Menu.Item>
                                <Menu.Item key={8} onClick={() => navigate(RouteNames.PANORAMIC_WINDOW)}>Panoramic window</Menu.Item>
                                <Menu.Item key={9} onClick={() => navigate(RouteNames.BAY_WINDOW)}>Bay window</Menu.Item>
                                <Menu.Item key={10} onClick={() => navigate(RouteNames.CASEMENT_WINDOW)}>Casement window</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu className={classes["navbar__menu--sub"]} key={11} title="DOORS">
                                <Menu.Item key={12} onClick={() => navigate(RouteNames.SHOWER_DOOR)}>Shower doors</Menu.Item>
                                <Menu.Item key={13} onClick={() => navigate(RouteNames.PATIO_DOORS)}>Patio doors</Menu.Item>
                                <Menu.Item key={14} onClick={() => navigate(RouteNames.SLIDING_DOORS)}>Sliding doors</Menu.Item>
                                <Menu.Item key={15} onClick={() => navigate(RouteNames.STORM_DOORS)}>Storm doors</Menu.Item>
                                <Menu.Item key={16} onClick={() => navigate(RouteNames.INTERIOR_DOORS)}>Interior doors</Menu.Item>
                                <Menu.Item key={17} onClick={() => navigate(RouteNames.ENTRY_DOORS)}>Entry doors</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item className={classes["navbar__menu--sub"]} key={18}>
                                REVIEWS
                            </Menu.Item>
                            <Menu.Item className={classes["navbar__menu--sub"]} key={19}>
                                COMPLETED WORKS
                            </Menu.Item>
                            <Menu.Item className={classes["navbar__menu--sub"]} key={20}>
                                CONTACTS
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                    <div className={classes.navbar__contacts}>
                        <div>
                            <p>Call us</p>
                            <a href="tel:+19294166262">+19294166262</a>
                            <p style={{textDecoration: "underline", cursor: "pointer"}}>or request a call back</p>
                        </div>
                        <PhoneOutlined style={{fontSize: "30px", marginLeft: "20px", cursor: "pointer"}} />
                    </div>
                </Row>
            </Layout.Header>
        </div>
    );
};

export default NavBar;