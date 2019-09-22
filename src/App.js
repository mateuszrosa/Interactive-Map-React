import React from "react";
import Heading from "./components/Heading/Heading";
import Map from "./components/Map/Map";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import "./App.css";

const body = document.querySelector("body");

class App extends React.Component {
  state = {};

  handleClick = e => {
    const land = body.querySelectorAll(".land");
    land.forEach(item => {
      item.style.fill = "#ac9d93";
    });
    e.target.style.fill = "gray";
    let value = e.target.getAttribute("title");
    console.log(value);
  };

  render() {
    return (
      <>
        <Heading text="Interactive World Map" />
        <Map click={this.handleClick} />
        <Section />
        <Footer />
      </>
    );
  }
}

export default App;
