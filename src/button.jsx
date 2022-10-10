import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="button">

        <button
          name="clear"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="bon"
        >
          clear
        </button>

        <button
          name="x"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="bon"
        >
          delete
        </button>
        <br />

        <button
          name="1"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          1
        </button>
        <button
          name="2"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          2
        </button>
        <button
          name="3"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          3
        </button>
        <button
          name="+"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          +
        </button>
        <br />

        <button
          name="4"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          4
        </button>
        <button
          name="5"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          5
        </button>
        <button
          name="6"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          6
        </button>
        <button
          name="-"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          -
        </button>
        <br />

        <button
          name="7"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          7
        </button>
        <button
          name="8"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          8
        </button>
        <button
          name="9"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          9
        </button>
        <button
          name="*"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          *
        </button>
        <br />

        <button
          name="."
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          .
        </button>
        <button
          name="0"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          0
        </button>
        <button
          name="="
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          =
        </button>
        <button
          name="/"
          onClick={(e) => this.props.onClick(e.target.name)}
          className="press"
        >
          ÷
        </button>
        <br />
      </div>
    );
  }
}



export default Button;