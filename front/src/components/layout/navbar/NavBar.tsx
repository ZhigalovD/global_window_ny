import React, {FC, useState} from 'react';
import classes from "./NavBar.module.scss"
import logo from "../../../assets/images/logo.svg"
import { Button, Drawer, Layout, Menu, Row } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const NavBar: FC = () => {
    const [visible, setVisible] = useState(false);

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
                    <div className={classes.navbar__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <Menu className={classes.navbar__menu} mode={"horizontal"} selectable={false}>
                        <Menu.SubMenu className={classes["navbar__menu--sub"]} key={1} title="WINDOWS">
                            <Menu.Item key={2}>Double window</Menu.Item>
                            <Menu.Item key={3}>Vinyl window</Menu.Item>
                            <Menu.Item key={4}>Garden window</Menu.Item>
                            <Menu.Item key={5}>Awning window</Menu.Item>
                            <Menu.Item key={6}>Unstandart window</Menu.Item>
                            <Menu.Item key={7}>Sliding window</Menu.Item>
                            <Menu.Item key={8}>Panoramic window</Menu.Item>
                            <Menu.Item key={9}>Bay window</Menu.Item>
                            <Menu.Item key={10}>Casement window</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu className={classes["navbar__menu--sub"]} key={11} title="DOORS">
                            <Menu.Item key={12}>Shower doors</Menu.Item>
                            <Menu.Item key={13}>Patio doors</Menu.Item>
                            <Menu.Item key={14}>Sliding doors</Menu.Item>
                            <Menu.Item key={15}>Storm doors</Menu.Item>
                            <Menu.Item key={16}>Interior doors</Menu.Item>
                            <Menu.Item key={17}>Entry doors</Menu.Item>
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
                                <Menu.Item key={2}>Double window</Menu.Item>
                                <Menu.Item key={3}>Vinyl window</Menu.Item>
                                <Menu.Item key={4}>Garden window</Menu.Item>
                                <Menu.Item key={5}>Awning window</Menu.Item>
                                <Menu.Item key={6}>Unstandart window</Menu.Item>
                                <Menu.Item key={7}>Sliding window</Menu.Item>
                                <Menu.Item key={8}>Panoramic window</Menu.Item>
                                <Menu.Item key={9}>Bay window</Menu.Item>
                                <Menu.Item key={10}>Casement window</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu className={classes["navbar__menu--sub"]} key={11} title="DOORS">
                                <Menu.Item key={12}>Shower doors</Menu.Item>
                                <Menu.Item key={13}>Patio doors</Menu.Item>
                                <Menu.Item key={14}>Sliding doors</Menu.Item>
                                <Menu.Item key={15}>Storm doors</Menu.Item>
                                <Menu.Item key={16}>Interior doors</Menu.Item>
                                <Menu.Item key={17}>Entry doors</Menu.Item>
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