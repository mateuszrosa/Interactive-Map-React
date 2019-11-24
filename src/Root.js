import React from 'react';
import Heading from 'components/atoms/Heading/Heading';
import Map from 'components/atoms/Map/Map';
import Section from 'components/organisms/Section/Section';
import Footer from 'components/molecules/Footer/Footer';
import styled from 'styled-components';

const body = document.querySelector('body');

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: block;
  }
`;

class Root extends React.Component {
  state = {
    information: {},
    input: true,
    placeholderText: '',
  };

  handleReset = () => {
    this.setState({
      information: {},
      input: true,
      placeholderText: '',
    });
  };

  handleClick = e => {
    if (e.target.getAttribute('title') === null) {
      this.handleReset();
      const land = body.querySelectorAll('.land');
      land.forEach(item => {
        item.style.fill = '#ac9d93';
      });
      e.target.value = '';
      return;
    }
    const country = e.target;
    const value = e.target.getAttribute('title');
    this.handleFillCountry(country);
    this.handleFetch(value);
    this.handleReset();
  };

  handleFillCountry = country => {
    const land = body.querySelectorAll('.land');
    land.forEach(item => {
      item.style.fill = '#ac9d93';
    });
    country.style.fill = 'gray';
  };

  handleInput = e => {
    const land = body.querySelectorAll('.land');
    land.forEach(item => {
      item.style.fill = '#ac9d93';
    });
    e.target.value = '';
    this.handleReset();
  };

  handleSubmit = e => {
    e.preventDefault();
    const input = e.target.children[1];
    const toTitleCase = str =>
      str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    const value = toTitleCase(input.value);
    const country = document.querySelector(`#g5406 path[title="${value}"]`);
    const selection = document.querySelector(`#g5406 path[title="${value}"]`) !== null;
    if (!selection) {
      this.setState(state => ({
        input: false,
        placeholderText: 'Invalid name',
      }));
      input.value = '';
    } else {
      this.handleFetch(value);
      this.handleFillCountry(country);
      this.handleReset();
    }
    input.value = '';
  };

  handleFetch = value => {
    if (value === 'South Korea') {
      value = 'Korea (Republic of)';
    } else if (value === 'North Korea') {
      value = "Korea (Democratic People's Republic of)";
    } else if (value === 'Republic of Congo') {
      value = 'Congo';
    } else if (value === 'Democratic Republic of Congo') {
      value = 'Congo (Democratic Republic of the)';
    }
    fetch(`https://restcountries.eu/rest/v2/name/${value}`)
      .then(resp => resp.json())
      .then(data => {
        let country = data[0];
        if (value === 'India') {
          country = data[1];
        } else if (value === 'United States') {
          country = data[1];
        }
        this.setState({
          information: {
            display: true,
            name: country.name,
            region: country.region,
            subregion: country.subregion,
            nativeName: country.nativeName,
            capital: country.capital,
            language: country.languages[0].name,
            currency: country.currencies[0].code,
            population: country.population.toLocaleString(),
            img: country.flag,
          },
        });
      }, false);
  };

  render() {
    const { input, placeholderText, information } = this.state;
    return (
      <StyledWrapper>
        <Heading type="title">Interactive World Map</Heading>
        <Map click={this.handleClick} />
        <Section
          click={this.handleInput}
          submit={this.handleSubmit}
          info={information}
          input={input}
          placeholder={placeholderText}
          id="country"
        />
        <Footer info={information} />
      </StyledWrapper>
    );
  }
}

export default Root;
