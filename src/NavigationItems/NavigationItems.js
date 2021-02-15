import React from "react";
import classes from "./NavigationItems.module.css";
const navigation = ()=>(
    <div className={classes.Navigation}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/submit">Submit</a></li>
        </ul>
    </div>
)
export default navigation;