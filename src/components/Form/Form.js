import React, { Component } from 'react';
import shortid from 'shortid';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  surnameInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    // console.log(e.currentTarget.checked);
    this.setState({licence: e.currentTarget.checked})
  };

  reset = () => {
    this.setState({ name: '', surname: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <label htmlFor={this.nameInputId} className="Form__label">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            className="Form__input"
          />
        </label>

        <label htmlFor={this.surnameInputId} className="Form__label">
          Surname
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
            id={this.surnameInputId}
            className="Form__input"
          />
        </label>
        <h5 className="Form__header">Your Level</h5>
        <label className="Form__radio">
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.handleChange}
          />
          Junior
        </label>
        <label className="Form__radio">
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.handleChange}
          />
          Middle
        </label>
        <label className="Form__radio">
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.handleChange}
          />
          Senior
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Agreed
        </label>

        <button type="submit" disabled={!this.state.licence} className="Form__button">
          Send
        </button>
      </form>
    );
  }
}

export default Form;
