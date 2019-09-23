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
    this.handleFetch(value);
  };
  handleInput = e => {
    const h1 = document.querySelectorAll(".info h1");
    h1[0].textContent = "";
  };
  handleFetch = value => {
    const h1 = document.querySelectorAll(".info h1");
    fetch(`https://restcountries.eu/rest/v2/name/` + value)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        let country = data[0];
        h1[0].innerHTML = `Name: <span class="inf">${country.name}</span>`;
        h1[1].innerHTML = `Region: <span class="inf">${country.region}</span>`;
        h1[2].innerHTML = `Subegion: <span class="inf">${country.subregion}</span>`;
        h1[3].innerHTML = `Native name: <span class="inf">${country.nativeName}</span>`;
        h1[4].innerHTML = `Capital: <span class="inf">${country.capital}</span>`;
        h1[5].innerHTML = `Language: <span class="inf">${country.languages[0].name}</span>`;
        h1[6].innerHTML = `Currency: <span class="inf">${country.currencies[0].code}</span>`;
        h1[7].innerHTML = `Population: <span class="inf">${country.population.toLocaleString()}</span>`;
      }, false);
  };

  render() {
    return (
      <>
        <Heading text="Interactive World Map" type="title" />
        <Map click={this.handleClick} />
        <Section click={this.handleInput} />
        <Footer />
      </>
    );
  }
}

export default App;
