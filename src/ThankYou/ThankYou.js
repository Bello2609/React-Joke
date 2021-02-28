import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Hoc from "../hoc/Hoc";
import classes from "./ThankYou.module.css";
const msg = (props)=>(
    <Hoc>
         <Backdrop show={props.show} clicked={props.remove} />
    <div className={classes.Message}>
        <p>Thanks for submitting your joke.</p>
    </div>
    </Hoc>
   
    
)
export default msg;