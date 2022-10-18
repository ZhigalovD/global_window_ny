import React, {FC} from 'react';
import classes from "./Main.module.scss"
import hero from "../../assets/images/hero-bg.png"

const Main: FC = () => {
    return (
        <div className={classes.main} style={{ backgroundImage: `url(${hero})` }}>
            <div className="container">
                <h1 className={classes["main__hero--title"]}>
                    <p>WINDOW AND DOOR INSTALLATION</p>
                    <p style={{color: "#1399C4"}}>IN NEW YORK</p>
                </h1>
            </div>
        </div>
    );
};

export default Main;