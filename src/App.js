import React from "react";
import Heading from "./components/Heading/Heading";
import Map from "./components/Map/Map";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import "./App.css";

const body = document.querySelector("body");
class App extends React.Component {
  state = {
    name: "",
    region: "",
    subregion: "",
    nativeName: "",
    capital: "",
    language: "",
    currency: "",
    population: "",
    img: ""
  };

  handleClick = e => {
    const land = body.querySelectorAll(".land");
    land.forEach(item => {
      item.style.fill = "#ac9d93";
    });
    e.target.style.fill = "gray";
    let value = e.target.getAttribute("title");
    this.handleFetch(value);
  };
  handleInput = () => {
    this.setState(state => ({
      name: "",
      region: "",
      subregion: "",
      nativeName: "",
      capital: "",
      language: "",
      currency: "",
      population: "",
      img: ""
    }));
    const land = body.querySelectorAll(".land");
    land.forEach(item => {
      item.style.fill = "#ac9d93";
    });
  };
  handleFetch = value => {
    fetch(`https://restcountries.eu/rest/v2/name/` + value)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        let country = data[0];
        this.setState(state => ({
          name: country.name,
          region: country.subregion,
          subregion: country.subregion,
          nativeName: country.nativeName,
          capital: country.capital,
          language: country.languages[0].name,
          currency: country.currencies[0].code,
          population: country.population.toLocaleString(),
          img: country.flag
        }));
      }, false);
  };

  render() {
    return (
      <>
        <Heading text="Interactive World Map" type="title" />
        <Map click={this.handleClick} />
        <Section click={this.handleInput} info={this.state} />
        <Footer />
      </>
    );
  }
}

export default App;
