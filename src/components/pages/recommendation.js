import React, { Component } from 'react';
import './BmiForm.css'
import '../Button.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
// import NutritionInfo from './NutritionInfo';
// import { Pie } from 'react-chartjs-2';
import Recommend from './recommendationinfo';

const STYLES = ['btn--primary', 'btn--outline', 'btn--custom1', 'btn--custom2', 'btn--custom3'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthcondition: '',
      fitnessgoal: '',
      loading: false,

    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // const token = localStorage.getItem('token'); 
    const token = localStorage.getItem('token'); 
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
      body: JSON.stringify(
        {
          HealthCondition: this.state.healthcondition,
          FitnessGoal: this.state.fitnessgoal
        }
      )
    };
    const url = 'http://localhost:5054/api/recommendations';
    try {
      this.setState({ loading: true });  
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data); // do something with the response data
      this.setState({
        supplement1:data.supplementname[0],
        supplement2:data.supplementname[1],
        supplement3:data.supplementname[2],
        supplement1score: data.recommendedsuppscore[0],
        supplement2score: data.recommendedsuppscore[1],
        supplement3score: data.recommendedsuppscore[2],
        loading:false,
      })
      console.log(data.recommendedsuppscore[0]);

    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  handleHealthChange = (event) => {
    this.setState({ healthcondition: event.target.value });
  };

  handleFitnessGoalChange = (event) => {
    this.setState({ fitnessgoal: event.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="bmrform-container">
          <h1 className='titletext'>Supplements For You</h1>
          <form className="form-box" onSubmit={this.handleSubmit}>
         
            <div className="form-group">
              <label className='form-label1'> HealthCondition : </label>
              <select
                  className="form-input1"
                  name='gender'
                  value={this.state.gender}
                  onChange={this.handleHealthChange}
                >
                  <option value="" className='option'>Select Your HealthCondition</option>
                  <option value="1" className='option'>Athlete</option>
                  <option value="2" className='option'>Normal</option>
                  <option value="3" className='option'>Heart Disease</option>
                  <option value="4" className='option'>Diabetes</option>
                  <option value="5" className='option'>High Blood Pressure</option>
                </select>
            
            
              <div className="form-group">
                <label className='form-label1'> FitnessGoal : </label>
                <select
                className="form-input1"
                name='goal'
                value={this.state.goal}
                onChange={this.handleFitnessGoalChange}
              >
                <option value="" className='option'> Select Your FitnessGoal</option>
                <option value="1" className='option'> Maintenance</option>
                <option value="2" className='option'>Bulking</option>
                <option value="3" className='option'>Shredding</option>
              </select>
              </div>

            </div>
            <div className='btn-form'>
              <Button buttonStyle='btn--custom1'>Submit</Button>
            </div>
          </form>
          
        <div className="table-container">
        <h1 className='resulttext'>Recommendations</h1>
        {this.state.loading ? (
            <div className="loading-animation">Loading...</div>
          ) : (
        <div className="recommend">
        <Recommend
          supplement1={this.state.supplement1}
          supplement2={this.state.supplement2}
          supplement3={this.state.supplement3}
          supplement1score = {this.state.supplement1score}
          supplement2score = {this.state.supplement2score}
          supplement3score = {this.state.supplement3score}
        />
        </div>
          )}
        </div>
        {/* <h1 className='resulttext2'>Your Nutrition Breakdown</h1>
        <div className='pie'>
        {this.state.carbohydrate && this.state.protein && this.state.fat &&
  <Pie
    data={{
      labels: ['Carbohydrate', 'Protein', 'Fat'],
      datasets: [{
        data: [this.state.carbohydrate, this.state.protein, this.state.fat],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }],
    }}
    options={{ maintainAspectRatio: false, height: '50%', width: '50%' }}
    style={{height: "400px", width: "400px" }}
  />
}</div> */}
</div>

        <Footer />
      </>
    );
  }
}

export default Recommendation;
