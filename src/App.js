import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Joke from "./Joke/Joke";
import Form from "./Form/Form";
class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/submit" component={Form} />
          <Route path="/" exact component={Joke} />
        </Switch>
      </div>
    );
  }
}

export default App;
