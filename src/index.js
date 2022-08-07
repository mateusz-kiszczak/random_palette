import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Section } from './Section';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area60: {
        h: 50,
        s: 70,
        l: 50
      },
      area30: {
        h: 50,
        s: 50,
        l: 85
      },
      area10: {
        h: 50,
        s: 100,
        l: 20
      },
      buttonColor: 'white',
      textColor: 'black'
    };
    this.swapColorsPossition = this.swapColorsPossition.bind(this);
    this.setMonochromatic = this.setMonochromatic.bind(this);
    this.setRandom = this.setRandom.bind(this);
    this.setTriad = this.setTriad.bind(this);
  }

  swapColorsPossition() {
    const area60 = this.state.area60;
    const area30 = this.state.area30;
    const area10 = this.state.area10;

    if (area10.l === 20) {
      this.setState({
        area60: area30,
        area30: area10,
        area10: area60,
        buttonColor: 'black',
        textColor: 'white'
      });
    }

    if (area10.l === 50) {
      this.setState({
        area60: area10,
        area30: area30,
        area10: area60,
        buttonColor: 'black',
        textColor: 'white'
      });
    }

    if (area10.l === 85) {
      this.setState({
        area60: area60,
        area30: area10,
        area10: area30,
        buttonColor: 'white',
        textColor: 'black'
      });
    }
  }

  setMonochromatic() {
    const randomHue = Math.round(Math.random() * 360);

    this.setState({
      area60: {
        ...this.state.area60,
        h: randomHue
      },
      area30: {
        ...this.state.area30,
        h: randomHue
      },
      area10: {
        ...this.state.area10,
        h: randomHue
      }
    });
  }

  setRandom() {
    this.setState({
      area60: {
        ...this.state.area60,
        h: Math.round(Math.random() * 360)
      },
      area30: {
        ...this.state.area30,
        h: Math.round(Math.random() * 360)
      },
      area10: {
        ...this.state.area10,
        h: Math.round(Math.random() * 360)
      }
    });
  }

  setTriad() {
    const randomHue = Math.round(Math.random() * 360);

    this.setState({
      area60: {
        ...this.state.area60,
        h: randomHue
      },
      area30: {
        ...this.state.area30,
        h: (randomHue + 120)%360
      },
      area10: {
        ...this.state.area10,
        h: Math.abs(randomHue - 120)%360
      }
    });
  }

  render() {
    const appBgColor = `hsl(${this.state.area60.h},${this.state.area60.s}%,${this.state.area60.l}%)`;
    const sectionBgColor = `hsl(${this.state.area30.h},${this.state.area30.s}%,${this.state.area30.l}%)`;
    const buttonBgColor = `hsl(${this.state.area10.h},${this.state.area10.s}%,${this.state.area10.l}%)`;
    const buttonColor = this.state.buttonColor;
    const textColor = this.state.textColor;

    return (
      <main style={{backgroundColor: appBgColor}}>
        <div className='content-container'>
          <div 
            className='top-header-container'
            style={
              {
                color: buttonColor, 
                backgroundColor: buttonBgColor
              }
            }>
            <h1>Create Pallete</h1>
          </div>
          <div 
            className='swap-button-container'
            style={{ backgroundColor: sectionBgColor }}>
            <button 
              className='swap-button' 
              style={
                {
                  color: buttonColor, 
                  backgroundColor: buttonBgColor
                }
              }
              onClick={this.swapColorsPossition}>Swap Colors position
            </button>
          </div>
            <Section
              sectionBgColor={sectionBgColor}
              sectionTextColor={textColor}
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonColor}
              buttonText="Render Mono"
              headerText="Monocromatic pallete" 
              onClick={this.setMonochromatic}
              >
            </Section>
            <Section
              sectionBgColor={sectionBgColor}
              sectionTextColor={textColor}
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonColor}
              buttonText="Render Random"
              headerText="Random pallete" 
              onClick={this.setRandom}
              >
            </Section>
            <Section
              sectionBgColor={sectionBgColor}
              sectionTextColor={textColor}
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonColor}
              buttonText="Render Triad"
              headerText="Triad pallete" 
              onClick={this.setTriad}
              >
            </Section>
        </div>
      </main>
    );
  }
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);