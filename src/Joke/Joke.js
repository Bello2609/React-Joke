import React, { Component } from "react";
import classes from "./Joke.module.css";
import Header from "../Header/Header";
import axios from "../axios-joke";
import Jokelist from "../JokeList/JokeLIst"
class joke extends Component{
    state={
        data: "",
    }
        componentDidMount(){
            axios.get("/jokes").then(res=>{
                const fetchedData = res.data;
                this.setState({
                    data: fetchedData
                })
                
            }).catch(err=>{
                console.log(err.message);
            })
        }
    render(){
        return(
            <div className={classes.Form}>
                <Header />
                {this.props.data.map( joke =>(
                     <Jokelist key={joke.joke} name={joke.name} joke={joke.joke} />
                ))}
            </div>
        );
    }
}
export default joke;