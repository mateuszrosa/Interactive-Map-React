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
    list: {
      display: false,
    },
  };

  handleReset = () => {
    this.setState({
      information: {},
      input: true,
      placeholderText: '',
      list: {
        display: false,
      },
    });
  };

  handleType = e => {
    let options = [];
    if (e.target.value.length > 1) {
      if (this.state.selected === 'name') {
        let countries = document.querySelectorAll(
          `[title*="${e.target.value.replace(/^\w/, c => c.toUpperCase())}"]`,
        );
        countries.forEach(country => {
          options.push(country.getAttribute('title'));
        });
        this.setState({
          list: {
            display: true,
            left: `${document.querySelector('input').offsetLeft}px`,
            top: `${document.querySelector('input').offsetTop + 5}px`,
            names: options,
          },
        });
      }
    } else if (!this.state.placeholderText) {
      this.handleReset();
    }
  };

  handleOption = e => {
    let input = document.querySelector('input#country');
    input.value = e.target.textContent;
    this.setState({
      list: {
        display: false,
      },
    });
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
    const value = country.getAttribute('id');
    this.handleFetch(value, 'alpha');
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
    let value = input.value;
    input.value = '';
    const land = body.querySelectorAll('.land');
    land.forEach(item => {
      item.style.fill = '#ac9d93';
    });
    if (this.state.selected === 'name') {
      value = document.querySelector(`[title$="${value}" i]`);
      if (value !== null) {
        value = value.getAttribute('id');
        this.handleFetch(value, 'alpha');
        this.handleReset();
      } else {
        this.handleReset();
        this.setState({
          input: false,
          placeholderText: 'Wrong country name',
        });
      }
    } else {
      this.handleFetch(value, this.state.selected);
      this.handleReset();
    }
  };

  handleFetch = (value, selected) => {
    fetch(`https://restcountries.eu/rest/v2/${selected}/${value}`)
      .then(resp => resp.json())
      .then(data => {
        let country = data;
        if (selected !== 'alpha') {
          country = data[0];
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
            currency: country.currencies,
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
        }
      });
  };

  render() {
    const { input, placeholderText, information, list, selected } = this.state;
    return (
      <StyledWrapper>
        <Heading type="title">Interactive World Map</Heading>
        <Map click={this.handleClick} />
        <Section
          click={this.handleInput}
          select={this.handleSelect}
          submit={this.handleSubmit}
          type={this.handleType}
          option={this.handleOption}
          list={list}
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
