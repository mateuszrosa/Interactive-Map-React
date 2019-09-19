import React from "react";
import Title from "./components/Title/Title";
import Map from "./components/Map/Map";
import "./App.css";

class App extends React.Component {
  state = {};

  handleClick = e => {
    console.log(e.target);
  };

  render() {
    return (
      <>
        <Title />
        <Map click={this.handleClick} />
      </>
    );
  }
}

export default App;
