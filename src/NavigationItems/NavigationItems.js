import React from "react";
import classes from "./NavigationItems.module.css";
import {NavLink} from "react-router-dom";
const navigation = ()=>(
    <div className={classes.Navigation}>
        <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/submit">Submit</NavLink></li>
        </ul>
    </div>
)
export default navigation;