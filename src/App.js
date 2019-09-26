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
    img: "",
    input: true,
    placeholderText: "Write your country name"
  };

  handleReset = () => {
    this.setState(state => ({
      input: true,
      placeholderText: "Write your country name"
    }));
  };

  handleClick = e => {
    if (e.target.getAttribute("title") === null) return;
    const country = e.target;
    const value = e.target.getAttribute("title");
    this.handleFillCountry(country);
    this.handleFetch(value);
  };

  handleFillCountry = country => {
    const land = body.querySelectorAll(".land");
    land.forEach(item => {
      item.style.fill = "#ac9d93";
    });
    country.style.fill = "gray";
  };

  handleInput = e => {
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
    e.target.value = "";
    this.handleReset();
  };

  handleSubmit = e => {
    e.preventDefault();
    let input = e.target.firstElementChild;
    const toTitleCase = str => {
      return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
    const value = toTitleCase(input.value);
    const country = document.querySelector(`#g5406 path[title="${value}"]`);
    const selection =
      document.querySelector(`#g5406 path[title="${value}"]`) !== null;
    if (!selection) {
      this.setState(state => ({
        input: false,
        placeholderText: "Invalid country name"
      }));
      input.value = "";
    } else {
      this.handleFetch(value);
      this.handleFillCountry(country);
      this.handleReset();
    }
    input.value = "";
  };

  handleFetch = value => {
    if (value === "South Korea") {
      value = "Korea (Republic of)";
    } else if (value === "North Korea") {
      value = "Korea (Democratic People's Republic of)";
    } else if (value === "Republic of Congo") {
      value = "Congo";
    } else if (value === "Democratic Republic of Congo") {
      value = "Congo (Democratic Republic of the)";
    }
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
          submit={this.handleSubmit}
          info={this.state}
          input={this.state.input}
          placeholder={this.state.placeholderText}
        />
        <Footer />
      </>
    );
  }
}

export default App;
