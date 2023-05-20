import React, { Component } from 'react';
import './BmiForm.css';
import '../Button.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--custom1', 'btn--custom2', 'btn--custom3'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
      data: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Height:', this.state.height);
    console.log('Weight:', this.state.weight);
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ weight: this.state.weight, height: this.state.height })
    };
    const url = 'http://localhost:5054/api/Calculation/bmi';
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.isSuccess) {
        this.setState({ data: responseData.result });
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  render() {
    const { data } = this.state;
    let id;

    if (data === 'Obese') {
      id = 7;
    } else if (data === 'Overweight') {
      id = 8;
    } else if (data === 'Underweight') {
      id = 9;
    } else if (data === 'Extremely Obese') {
      id = 10;
    }

    return (
      <>
        <Navbar />
        <div className="bmiform-container">
          <h1 className='bmi-heading'>Enter Your Body Dimensions To Get Your Personalized Workout Routine</h1>
          <form className="form-box" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className='form-label1'> Height (in m) : </label>
              <input
                className='form-input1'
                type='text'
                name='height'
                placeholder='Enter your height in meters'
                value={this.state.height}
                onChange={this.handleHeightChange}
              />
            </div>
            <div className="form-group">
              <label className='form-label1'>Weight (in kg) : </label>
              <input
                className='form-input1'
                type='text'
                name='weight'
                placeholder='Enter your weight in kg'
                value={this.state.weight}
                onChange={this.handleWeightChange}
              />
            </div>
            <div className='btn-form'>
              <Button buttonStyle='btn--custom1'>Submit</Button>
            </div>
            {data && (
              <div className='btn-form'>
                <Link
                  to={`/pdf/${id}`}
                >
                  <Button buttonStyle='btn--custom2'>View PDF</Button>
                </Link>
              </div>
            )}
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default BmiForm;
