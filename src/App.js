import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";
import WorkDetail from "./WorkDetail";
import Resume from "./resume.pdf";
import Portfolio from "./Portfolio.pdf";
import Image1 from "./assets/1_s.png";
import Image1_1 from "./assets/1_1.png";
import Image1_2 from "./assets/1_2.png";
import Image1_3 from "./assets/1_3.png";
import Image2 from "./assets/2_s.png";
import Image2_1 from "./assets/2_1.png";
import Image2_2 from "./assets/2_2.png";
import Image2_3 from "./assets/2_3.png";
import Image3_1 from "./assets/3_1.png";
import Image3_2 from "./assets/3_2.png";
import Image3_3 from "./assets/3_3.png";
import Image3 from "./assets/3_s.png";
import Image4 from "./assets/4_s.png";
import Image4_1 from "./assets/4_1.png";
import Image5 from "./assets/5_s.png";
import Image5_1 from "./assets/5_1.png";
import Image5_2 from "./assets/5_2.png";
import Image6 from "./assets/6_s.png";
import Image6_1 from "./assets/6_1.png";
import Image7 from "./assets/7_s.png";
import Image7_1 from "./assets/7_1.png";
import Image7_2 from "./assets/7_2.png";
import Image7_3 from "./assets/7_3.png";
import Image9 from "./assets/9_s.png";
import Image9_1 from "./assets/9_1.png";
import Image9_2 from "./assets/9_2.png";
import Image9_3 from "./assets/9_3.png";
import Image10 from "./assets/10_s.png";
import Image10_1 from "./assets/10_1.png";
import Image11 from "./assets/11_s.png";
import Image11_1 from "./assets/11_1.png";
import Image12 from "./assets/12_s.png";
import Image12_1 from "./assets/12_1.jpeg";
import Image12_2 from "./assets/12_2.png";
import Image12_3 from "./assets/12_3.png";
import Image13 from "./assets/13_s.png";
import Image13_1 from "./assets/13_1.png";
import Video1 from "./assets/1.mp4";
import Video2 from "./assets/2.mp4";
import Video3 from "./assets/3.mp4";
import Video4 from "./assets/4.mp4";
import Video5 from "./assets/5.mp4";
import Video6 from "./assets/6.mp4";

class App extends Component {
  constructor(props) {
    super(props);

    // let initialState = localStorage.getItem("appData");
    // if (initialState) {
    //   this.state = JSON.parse(initialState);
    // } else {
    this.state = {
      selected: "project",
      selectedWork: 2,
      show: false,
      works: [
        {
          name: "the Sound of Poseidon",
          pic: Image1,
          pics: [Image1_1, Image1_2, Image1_3],
          tag: "p5.js, music visualization",
          id: 1,
          video: Video1,
          category: "project",
          linkword: "Link to the Exhibition",
          link: "https://shanghai.nyu.edu/news/infinite-dimensions",
          description: [
            "This project was put on the INFINITE New Born Exhibition in MixCity.",
            "Poseidon is the god of the sea in ancient Greek myth. The Sound of Poseidon " +
              "brings sound and water movement together. It is a set of interactive 3D musical fountains that visualize" +
              " sound and music by changing the color, movement, and oscillation of several particle systems " +
              "(as water drops). ",
            "There are six different types of fountains in total, of which different " +
              "combinations have various visual effects. The audience can give a sound or music through microphone, " +
              "and see how it affects the fountains."
          ]
        },
        {
          name: "taste",
          pic: Image7,
          pics: [Image7_1, Image7_2, Image7_3],
          tag: "p5.js, visualization",
          id: 2,
          video: Video2,
          category: "project",
          description: [
            "Inspired by one scene in Ratatouille, taste aims at visualizing the taste of food using colors and movements of particles. All effects are realized by physical simulations using p5.js. They consist of collisions, " +
              "flow fields, flocking systems, oscillations, etc. The tastes of four foods are visualized in this project: strawberry, cola, sushi, and cotton candy." +
              "There is also a red bouncing ball representing the taste bud. ",
            "Through this project I would like to offer an immersive journey for the user to discover tastes of food in a creative visualized way." +
              " It's a game where the user can control the direction of the taste bud, and let it crash into particle-packing images of food. The particles have different " +
              "colors, shapes, and movements that represent the taste. BGMs are added to match the particular feeling of a food."
          ]
        },
        {
          name: "myContact",
          pic: Image2,
          pics: [Image2_1, Image2_2, Image2_3],
          tag: "React.js, user interface",
          id: 3,
          video: Video3,
          category: "project",
          description: [
            "myContact is a simple mobile contact app written in React.js. It basically contains a homepage with a list of contacts and a detail page for any selected contact. The user can get access to particular contacts by searching, filtering or jumping to initials. The app offers various options to change the preview, the sorting method and the color style. The user can also add, edit and delete contact information.",
            "I call the app myContact because one main thing I want to elaborate here is the user’s control over this app. When I use mobile apps at ordinary times, I always like to play with the buttons that can change the look of the app. Therefore, I would like to offer my users some choices about what content and what style they would like to see. ",
            "In the meantime, I realize it is equally important not to give users too much work so that they get confused. That’s why I hide the “options” menu in a button. I use a clean, clear, and pretty traditional layout to enhance affordance and accessibility of the functionalities."
          ]
        },
        {
          name: "the Three S",
          pic: Image5,
          pics: [Image5_1, Image5_2],
          video: Video4,
          tag: "Unity, artgame",
          id: 4,
          category: "project",
          description: [
            "The 3S is a game that wants to show how a student manages to handle the balance between Study, Social, and Sleep, the three main parts of college life. It takes the form of a 2D platformer, with a student as the main character whose movement can be controlled by the player. The study, social, and sleep parts of the student’s life are represented by different activities on different platforms. The student can jump between those platforms. The results of experiencing the three activities are inter-related. Each activity has an advantage that triggers the student to do it while spending unequal time on the three leads to bad results. The objective for the player is to help the student maintain a balanced life through a semester.",
            "Besides letting the player experience the typical life of college student and its hardness in choice-making and balance-maintaining, this game is also a work full of self-expression and emotion-outlet. I would like the player to feel the inner needs of the student to do the study, social, and sleep, and how the student lives cautiously to fulfill these needs. Besides, I would show the feeling of anxiety and depression caused by the disorder in life, and the urge to right the wrong. "
          ]
        },
        {
          name: "Digital Fountain",
          pic: Image4,
          pics: [Image4_1],
          video: Video5,
          tag: "p5.js, 3D",
          id: 6,
          category: "project",
          description: [
            "This is a 3D digital musical fountain written in p5.js. As a reality simulation, this little project aims at restoring the dream-like scene in girl's dream."
          ]
        },
        {
          name: "the Water Points",
          pic: Image6,
          pics: [Image6_1],
          video: Video6,
          tag: "JS, data visualization",
          id: 7,
          category: "project",
          description: [
            "This is a project that visualizes the water pollution situation in Zhujiang, China. The little points represent the monthly water qualities of all the rivers."
          ]
        },
        {
          name: "Magazine Covers",
          pic: Image3,
          pics: [Image3_1, Image3_2, Image3_3],
          tag: "PS, graphic design",
          id: 8,
          category: "design",
          description: [
            "I designed this series of magazine covers during a summer camp in Yuanling No.6 Middle School. As a volunteer, my job was to instruct the students to collect the stories around their neighborhood and make a magazine about them. I tried various styles and enjoyed the process. Finally, the first one was chosen by the students."
          ]
        },
        {
          name: "Flowers",
          pic: Image12,
          pics: [Image12_1, Image12_2, Image12_3],
          tag: "p5.js, PS, generative art",
          id: 9,
          category: "design",
          description: [
            "This mobile wallpaper is a gift for a friend. It was made out of single flowers generated by p5.js. Perlin noise was used to make the natural shape of the leaf."
          ]
        },
        {
          name: "Chinese Event Posters",
          pic: Image9,
          pics: [Image9_1, Image9_2, Image9_3],
          tag: "PS, graphic design",
          id: 10,
          category: "design",
          description: [
            "This series of posters were designed for our SINICA club event: Games in Ancient China. I chose several ancient Chinese game elements to highlight the event content. Traditional Chinese colors were also used to convey the old feelings."
          ]
        },
        {
          name: "Start-up Competition Poster",
          pic: Image11,
          pics: [Image11_1],
          tag: "PS, graphic design",
          id: 11,
          category: "design",
          description: [""]
        },
        {
          name: "Acting Show Posters",
          pic: Image10,
          pics: [Image10_1],
          tag: "PS, graphic design",
          id: 12,
          category: "design",
          description: [""]
        },
        {
          name: "Promotion Board",
          pic: Image13,
          pics: [Image13_1],
          tag: "PS, graphic design",
          id: 13,
          category: "design",
          description: [""]
        }
      ]
      //  };
    };

    this.buttonClicked = this.buttonClicked.bind(this);
    this.onClick = this.onClick.bind(this);
    this.unshow = this.unshow.bind(this);
  }

  buttonClicked(p) {
    this.setState({
      selected: p
    });
  }

  unshow() {
    this.setState({
      show: false,
      selectedWork: 12
    });
  }

  onClick(id) {
    this.setState({
      selectedWork: id,
      show: true
    });
  }

  componentDidUpdate() {
    localStorage.setItem("appData", JSON.stringify(this.state));
  }

  render() {
    const sections = ["about", "project", "design"];

    const buttons = sections.map((section, i) => (
      <Button
        key={i}
        selected={this.state.selected === section}
        label={section}
        onClick={this.buttonClicked}
      />
    ));

    const work = this.state.works.find(w => w.id === this.state.selectedWork);

    let classes = "hide ";

    if (this.state.show === false) {
      classes += "not";
    }

    return (
      <div className="App">
        <div className="headline">
          <div className="name"> Chuyi Zhang </div>
          <div className="description"> Code, design, and remix. </div>
          <div className="buttons">
            {buttons}
            <a
              className="Button"
              target="_blank"
              href="https://github.com/RomolaZhang/"
            >
              code
            </a>
            <a className="Button" target="_blank" href={Portfolio}>
              portfolio
            </a>
          </div>
          <div className="smallname"> Chuyi Zhang</div>
          <div className="smalldesc">Code, design, and remix.</div>
        </div>
        <div className={classes} onClick={this.unshow} />
        <Display
          onClick={this.onClick}
          selected={this.state.selected}
          works={this.state.works}
        />
        <div className="footnote">@2018 Chuyi Zhang. All rights reserved</div>
        <WorkDetail show={this.state.show} work={work} />
      </div>
    );
  }
}

export default App;
