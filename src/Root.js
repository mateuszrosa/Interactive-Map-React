import React from 'react';
import AppContext from './context';
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
      displayList: false,
    },
  };

  handleReset = () => {
    this.setState({
      information: {},
      input: true,
      placeholderText: '',
      list: {
        displayList: false,
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
            displayList: true,
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
    let input = document.querySelector('input');
    input.value = e.target.textContent;
    this.setState({
      list: {
        displayList: false,
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
    fetch(`https://restcountries.com/v3.1/${selected}/${value}`)
      .then(resp => resp.json())
      .then(data => {
        let [country] = data;
        if (selected !== 'alpha') {
          country = data[0];
        }
        const lang = Object.keys(country.languages)[0].toLowerCase();
        this.setState({
          information: {
            display: true,
            name: country.name.common,
            region: country.region,
            subregion: country.subregion,
            nativeName: Object.values(country.name.nativeName[lang])[0],
            capital: country.capital[0],
            language: Object.values(country.languages),
            currency: Object.keys(country.currencies),
            population: country.population.toLocaleString(),
            img: country.flags.png,
          },
        });
        const countryName = document.querySelector(`#${country.cca2}`);
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
    const contextElements = {
      input,
      placeholderText,
      ...information,
      ...list,
      selected,
      click: this.handleClick,
      inputClick: this.handleInput,
      select: this.handleSelect,
      submit: this.handleSubmit,
      type: this.handleType,
      option: this.handleOption,
    };
    return (
      <AppContext.Provider value={contextElements}>
        <StyledWrapper>
          <Heading type="title">Interactive World Map</Heading>
          <Map />
          <Section />
          <Footer />
        </StyledWrapper>
      </AppContext.Provider>
    );
  }
}

export default Root;
