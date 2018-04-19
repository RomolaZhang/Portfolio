import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div className="Box" onClick={this.onClick}>
        <div className="wrap">
          <img alt="" className="image" src={this.props.pic} />
        </div>
        <div className="workname">{this.props.name}</div>
        <div className="tag">{this.props.tag}</div>
      </div>
    );
  }
}

export default Box;
