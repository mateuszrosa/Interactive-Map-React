import React from "react";
import Title from "./components/Title/Title";
import Map from "./components/Map/Map";
import "./App.css";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Title />
        <Map />
      </>
    );
  }
}

export default App;
