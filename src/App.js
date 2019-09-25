import React from "react";
import Heading from "./components/Heading/Heading";
import Map from "./components/Map/Map";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import "./App.css";

const body = document.querySelector("body");
class App extends React.Component {
  state = {
    display: false,
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
    if (e.target.getAttribute("title") === null) return;
    const land = body.querySelectorAll(".land");
    land.forEach(item => {
      item.style.fill = "#ac9d93";
    });
    e.target.style.fill = "gray";
    let value = e.target.getAttribute("title");
    if (value === "South Korea") {
      value = "Korea (Republic of)";
    } else if (value === "North Korea") {
      value = "Korea (Democratic People's Republic of)";
    } else if (value === "Republic of Congo") {
      value = "Congo";
    } else if (value === "Democratic Republic of Congo") {
      value = "Congo (Democratic Republic of the)";
    }
    this.handleFetch(value);
  };
  handleInput = () => {
    this.setState(state => ({
      display: false,
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
  handleChange = e => {
    e.preventDefault();
    const toTitleCase = str => {
      return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
  };
  handleFetch = value => {
    fetch(`https://restcountries.eu/rest/v2/name/` + value)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        let country = data[0];
        if (value === "India") {
          country = data[1];
        } else if (value === "United States") {
          country = data[1];
        }
        this.setState(state => ({
          display: true,
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
        <Section
          click={this.handleInput}
          change={this.handleChange}
          info={this.state}
        />
        <Footer />
      </>
    );
  }
}

export default App;
