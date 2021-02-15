import React from "react";
import classes from "./Header.module.css";
import NavigationItems from "../NavigationItems/NavigationItems"
const header = ()=>{
    return(
        <div className={classes.Header}>
            <header>
                <h1>JOKE LOADER</h1>
            </header>
            <NavigationItems />
        </div>
       
    );
}
export default header;