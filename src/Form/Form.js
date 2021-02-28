import React from "react";
import Input from "../Input/Input";
import Header from "../Header/Header";
import classes from "./Form.module.css";
import axios from "../axios-joke";
class Form extends React.Component{
    state = {
        jokeForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Enter your fullname"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false
            },
            joke: {
                elementType: "textarea",
                elementConfig: {
                    type: "text",
                    placeholder: "enter your joke here"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false
            },
            category: {
                elementType: "select",
                elementConfig: {
                    options:[
                        {value: "programming", displayValue: "Programming"},
                        {value: "others", displayValue: "Others"}
                    ]
                },
                value: ""
            }
        },
        loading: false
    }
    //input change handler
    inputChangeHandler = (event, formIdentifier)=>{
        const updatedJoke = {
            ...this.state.jokeForm
        }
        const updatedJokeElement = {
            ...updatedJoke[formIdentifier]
        }
        updatedJokeElement.value = event.target.value;
        updatedJokeElement.valid = this.checkValidity(updatedJokeElement.value, updatedJokeElement.validation);
        updatedJoke[formIdentifier] = updatedJokeElement;
        this.setState({
            jokeForm: updatedJoke
        })
    }
    //this well check for the validity
    checkValidity = (value, rules) =>{
        let isValid = false;
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== "";
        }
        return isValid;

    }
    //this wll submit my form
    submitForm = (e)=>{
        e.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let key in this.state.jokeForm){
            formData[key] = this.state.jokeForm[key].value;
        }
        let jokeList ={
            formData: formData
        }
        axios.post("/jokes.json", jokeList).then(res=>{
            this.props.history.push("/");
            this.setState({
                loading: false
            })
        }).catch(err=>{
            this.setState({
                loading: false
            })
            alert(err.message);
        })
    }
    render(){
        const formElementArray = [];
        for(let key in this.state.jokeForm){
            formElementArray.push({
                id: key,
                config: this.state.jokeForm[key]
            })
        }
        let form = (
            <form onSubmit={this.submitForm}>
                {formElementArray.map(formElement=>(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        isvalid={!formElement.config.valid}
                        changed={(event)=> this.inputChangeHandler(event, formElement.id)}
                     />
                ))}
                    <button type="submit">Submit</button>
            </form>
        )
        return(
            <div>
                <Header />
                 <div className={classes.Form}>
                    <h4>Enter your favourite joke here</h4>
                    {form}
            </div>
            </div>
           
           
        )
    }
} 
export default Form;