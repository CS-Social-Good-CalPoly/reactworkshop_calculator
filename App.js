import React from 'react';

import Button from "./components/Button";
import Input from "./components/Input";
import Clear from "./components/Clear"

class App extends React.Component {

  state = {input: "", preNum: "", currNum: "", op: ""};
  
  addToInput = val => {
      this.setState({input: this.state.input + val});  
  };
  
  addZeroInput = val => {
    if(this.state.input !== "") {
      this.setState({input: this.state.input + val})
    }
  }
  
  addDecimalInput = val => {
    if(this.state.input.indexOf(".") === -1) {
      this.setState({input: this.state.input + val})
    }
  }
  
  clearInput = () => {
    this.setState({input: ""})
  }
  
  add = () => {
    this.setState({preNum: this.state.input})
    this.setState({input: ""})
    this.setState({op: "plus"})
  }
  
  subtract = () => {
    this.setState({preNum: this.state.input})
    this.setState({input: ""})
    this.setState({op: "sub"})
  }
  
  mult = () => {
    this.setState({preNum: this.state.input})
    this.setState({input: ""})
    this.setState({op: "mult"})
  }
  
  divide = () => {
    this.setState({preNum: this.state.input})
    this.setState({input: ""})
    this.setState({op: "divide"})
  }
  
  evaluate = () => {
    this.state.currNum = this.state.input
    
    if(this.state.op === "plus") {
      this.setState({input: parseFloat(this.state.preNum) + parseFloat(this.state.currNum)})
    } else if(this.state.op === "sub") {
      this.setState({input: parseFloat(this.state.preNum) - parseFloat(this.state.currNum)})
    } else if(this.state.op === "mult") {
      this.setState({input: parseFloat(this.state.preNum) * parseFloat(this.state.currNum)})
    } else if(this.state.op === "divide") {
      this.setState({input: parseFloat(this.state.preNum) / parseFloat(this.state.currNum)})
    }
  }
  
  render() {
    return (
      <div className = "app">
        <div className = "calc-wrapper">
          <div className = "row">
            <Input in={this.state.input}></Input>
          </div>
          <div className = "row">
            <Button handleClick={this.addToInput} num="7"> </Button>
            <Button handleClick={this.addToInput} num="8"></Button>
            <Button handleClick={this.addToInput} num="9"></Button>
            <Button handleClick={this.divide} num="/"></Button>
          </div>
          <div className = "row">
            <Button handleClick={this.addToInput} num="4"></Button>
            <Button handleClick={this.addToInput} num="5"></Button>
            <Button handleClick={this.addToInput} num="6"></Button>
            <Button handleClick={this.mult} num="*"></Button>
          </div>
          <div className = "row">
            <Button handleClick={this.addToInput} num="1"></Button>
            <Button handleClick={this.addToInput} num="2"></Button>
            <Button handleClick={this.addToInput} num="3"></Button>
            <Button handleClick={this.add} num="+"></Button>
          </div>
          <div className = "row">
            <Button handleClick={this.addDecimalInput} num="."></Button>
            <Button handleClick={this.addZeroInput} num="0"></Button>
            <Button handleClick={this.evaluate} num="="></Button>
            <Button handleClick={this.subtract} num="-"></Button>
          </div>
          <div className = "row">
            <Clear handleClear = {this.clearInput} num="Clear"></Clear>
          </div>
        </div>
      </div>
    );
  }
}
export default App