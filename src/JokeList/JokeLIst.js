import React from "react";
import classes from "./JokeList.module.css";
const jokelist = (props) =>{
    return(
        <div className={classes.Jokelist}>
            <h4>{props.joke}</h4>
            <p>uploaded by: <b>{props.name}</b></p>
        </div>
    )
}
export default jokelist;