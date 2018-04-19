import React, { Component } from "react";
import "./WorkDetail.css";

class WorkDetail extends Component {
  render() {
    let classes = "";
    let cate = "";

    if (this.props.show) {
      classes += " display";
    }

    if (this.props.work.category === "design") {
      cate += "design";
    } else if (this.props.work.category === "project") {
      cate += "project";
    }

    return (
      <div className={"WorkDetail" + classes}>
        {this.props.show && (
          <div className="content">
            <div className="detailname">{this.props.work.name}</div>
            <div className="detailtag"> {this.props.work.tag}</div>
            <video
              poster={this.props.work.pics[0]}
              preload="auto"
              autoPlay
              className={"Video " + cate}
              controls
              src={this.props.work.video}
            />
            <div className="detaildesc"> {this.props.work.description[0]} </div>
            <a href={this.props.work.link} className="detaillink">
              {this.props.work.linkword}
            </a>
            <div className="picture">
              <img
                className={"detailpic " + cate}
                src={this.props.work.pics[0]}
              />
            </div>
            <div className="detaildesc"> {this.props.work.description[1]} </div>
            <div className="picture">
              <img
                className={"detailpic " + cate}
                src={this.props.work.pics[1]}
              />
            </div>
            <div className="detaildesc"> {this.props.work.description[2]} </div>
            <div className="picture">
              <img
                className={"detailpic " + cate}
                src={this.props.work.pics[2]}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WorkDetail;
