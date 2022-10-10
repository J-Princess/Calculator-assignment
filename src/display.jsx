import React, { Component } from "react";

class OutputDisplay extends Component {
  render() {
    let { result, input } = this.props;

    return (
      <section>
        <div className="inpot">
          <p>{input}</p>
        </div>
        <div className="result">
          <p>{result}</p>
        </div>
      </section>
    );
  }
}

export default OutputDisplay;