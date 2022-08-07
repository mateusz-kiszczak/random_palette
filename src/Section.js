import React from 'react';

export class Section extends React.Component {
  render() {
    return (
      <section 
        className='section-container'
        style={
          {
            color: this.props.sectionTextColor, 
            backgroundColor: this.props.sectionBgColor
          }
        }>
        <h2>{this.props.headerText}</h2>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='button-container'>
          <button 
            className='random-button'
            style={
              {
                color: this.props.buttonTextColor, 
                backgroundColor: this.props.buttonBgColor
              }
            }
            onClick={this.props.onClick}>
            {this.props.buttonText}
          </button>
        </div>
      </section>
    );
  }
};