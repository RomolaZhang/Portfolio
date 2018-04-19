import React, { Component } from "react";
import Box from "./Box";
import Smallbutton from "./Smallbutton";
import "./Display.css";
import Photo from "./assets/photo.jpeg";
import Photo2 from "./assets/photo2.jpeg";

class Display extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    this.props.onClick(id);
  }

  render() {
    if (this.props.selected === "about") {
      return (
        <div className="about">
          <img alt="" className="photo2" src={Photo2} />
          <img alt="" className="photo" src={Photo} />
          <div className="text">
            <div className="head">Hi, this is Chuyi.</div>
            <div className="intro">
              On being a creative coder, front-end developer, and UX designer.
            </div>
            <div className="detail">
              New York University Shanghai, Class of 2020
            </div>
            <div className="detail">
              Major in Interactive Media Arts, minor in Computer Science
            </div>
            <div className="smallbuttons">
              <Smallbutton
                link="https://github.com/RomolaZhang/"
                label="github"
              />
              <Smallbutton
                link="https://www.linkedin.com/in/chuyi-zhang-9890a214b/"
                label="LinkedIn"
              />
              <Smallbutton link="mailto:cz1302@nyu.edu" label="Email" />
            </div>
          </div>
        </div>
      );
    } else {
      const works = this.props.works.filter(work => {
        return work.category.match(this.props.selected);
      });

      const boxes = works.map(work => {
        return (
          <Box
            onClick={this.onClick}
            key={work.id}
            name={work.name}
            tag={work.tag}
            pic={work.pic}
            id={work.id}
          />
        );
      });

      return <div className="work">{boxes}</div>;
    }
  }
}

export default Display;
