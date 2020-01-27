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
    margin: 0 auto;
  }
`;

class Root extends React.Component {
  state = {
    information: {},
    input: true,
    placeholderText: '',
    selected: 'name',
  };

  handleReset = () => {
    this.setState({
      information: {},
      input: true,
      placeholderText: '',
    });
  };

  handleType = e => {
    console.log(e.target.value);
  };

  handleSelect = e => {
    this.setState({
      selected: e.target.value,
    });
  };

  handleClick = e => {
    const country = e.target;
    if (country.getAttribute('title') === null) {
      this.handleReset();
      const land = body.querySelectorAll('.land');
      land.forEach(item => {
        item.style.fill = '#ac9d93';
      });
      e.target.value = '';
      return;
    }
    const value = country.getAttribute('title');
    console.log(value);
    this.handleFetch(value, 'name');
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
    if (input.value.length < 3) {
      input.value = '';
      this.setState({
        input: false,
        placeholderText: 'Too short value',
      });
      return;
    }
    const toTitleCase = str =>
      str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    const value = toTitleCase(input.value);
    input.value = '';
    const land = body.querySelectorAll('.land');
    land.forEach(item => {
      item.style.fill = '#ac9d93';
    });
    this.handleFetch(value, this.state.selected);
    this.handleReset();
  };

  handleFetch = (value, selected) => {
    console.log(value, selected);
    if (value === 'South Korea') {
      value = 'Korea (Republic of)';
    } else if (value === 'North Korea') {
      value = "Korea (Democratic People's Republic of)";
    } else if (value === 'Republic of Congo') {
      value = 'Congo';
    } else if (value === 'Democratic Republic of Congo') {
      value = 'Congo (Democratic Republic of the)';
    }
    fetch(`https://restcountries.eu/rest/v2/${selected}/${value}`)
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
        const countryName = document.querySelector(`#${country.alpha2Code}`);
        this.handleFillCountry(countryName);
      }, false)
      .catch(error => {
        console.error('Error:', error);
        if (selected === 'capital') {
          this.setState({
            input: false,
            placeholderText: `Wrong capital name`,
          });
        } else if (selected === 'currency') {
          this.setState({
            input: false,
            placeholderText: 'Wrong currency name',
          });
        } else {
          this.setState({
            input: false,
            placeholderText: 'Wrong country name',
          });
        }
      });
  };

  render() {
    const { input, placeholderText, information, selected } = this.state;
    return (
      <StyledWrapper>
        <Heading type="title">Interactive World Map</Heading>
        <Map click={this.handleClick} />
        <Section
          click={this.handleInput}
          select={this.handleSelect}
          submit={this.handleSubmit}
          type={this.handleType}
          selected={selected}
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