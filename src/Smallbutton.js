import React, { Component } from "react";
import "./Button.css";
import "./Smallbutton.css";

class Smallbutton extends Component {
  render() {
    return (
      <div className="small_button">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.link}
          className="smallbutton"
        >
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default Smallbutton;
