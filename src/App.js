import React from "react";
import Heading from "./components/Heading/Heading";
import Map from "./components/Map/Map";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Info from "./components/Section/Info/Info";

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
    this.handleTest(value);
  };
  handleTest = text => {
    const h1 = document.querySelector(".info h1");
    h1.textContent = `Name: ${text}`;
  };

  render() {
    return (
      <>
        <Heading text="Interactive World Map" type="title" />
        <Map click={this.handleClick} />
        <Section />
        <Footer />
      </>
    );
  }
}

export default App;
