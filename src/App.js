import React from "react";
import Title from "./components/Title/Title";
import Map from "./components/Map/Map";
import Section from "./components/Section/Section";
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
        <Title />
        <Map click={this.handleClick} />
        <Section />
      </>
    );
  }
}

export default App;
