import './App.css'
import React, { Component } from "react";
import OutputDisplay from './display.jsx';
import Button from './button.jsx';


export default class App extends Component {
  state = {
    result: "",
    input: "",
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "clear") {
      this.reset();
    } else if (button === "x") {
      this.backspace();
    } else {
      this.setState({
        input: this.state.input + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.input.includes("--")) {
      checkResult = this.state.input.replace("--", "+");
    } else {
      checkResult = this.state.input;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
      input:""
    });
  };

  backspace = () => {
    this.setState({
      input: this.state.input.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="body">
          <OutputDisplay
            result={this.state.result}
            input={this.state.input}  
          />
          <Button onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

