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
        probability1:data.probability[0],
        probability2:data.probability[1],
        probability3:data.probability[2],
        probability4:data.probability[3],
        probability5:data.probability[4],
        probability6:data.probability[5],
        probability7:data.probability[6],
        probability8:data.probability[7],
        probability9:data.probability[8],
        probability10:data.probability[9],
        allsuppscores1:data.allsuppscores[0],
        allsuppscores2:data.allsuppscores[1],
        allsuppscores3:data.allsuppscores[2],
        allsuppscores4:data.allsuppscores[3],
        allsuppscores5:data.allsuppscores[4],
        allsuppscores6:data.allsuppscores[5],
        allsuppscores7:data.allsuppscores[6],
        allsuppscores8:data.allsuppscores[7],
        allsuppscores9:data.allsuppscores[8],
        allsuppscores10:data.allsuppscores[9],
        allsupplementnames1:data.allsupplementnames[0],
        allsupplementnames2:data.allsupplementnames[1],
        allsupplementnames3:data.allsupplementnames[2],
        allsupplementnames4:data.allsupplementnames[3],
        allsupplementnames5:data.allsupplementnames[4],
        allsupplementnames6:data.allsupplementnames[5],
        allsupplementnames7:data.allsupplementnames[6],
        allsupplementnames8:data.allsupplementnames[7],
        allsupplementnames9:data.allsupplementnames[8],
        allsupplementnames10:data.allsupplementnames[9],
        
        loading:false,
      })
      console.log(data.recommendedsuppscore[0]);
      console.log(data.allsupplementnames[0]);
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
          probability1 ={this.state.probability1}
          probability2 ={this.state.probability2}
          probability3 ={this.state.probability3}
          probability4 ={this.state.probability4}
          probability5 ={this.state.probability5}
          probability6 ={this.state.probability6}
          probability7 ={this.state.probability7}
          probability8 ={this.state.probability8}
          probability9 ={this.state.probability9}
          probability10 ={this.state.probability10}
          allsuppscores1 = {this.state.allsuppscores1}
          allsuppscores2 = {this.state.allsuppscores2}
          allsuppscores3 = {this.state.allsuppscores3}
          allsuppscores4 = {this.state.allsuppscores4}
          allsuppscores5 = {this.state.allsuppscores5}
          allsuppscores6 = {this.state.allsuppscores6}
          allsuppscores7 = {this.state.allsuppscores7}
          allsuppscores8 = {this.state.allsuppscores8}
          allsuppscores9 = {this.state.allsuppscores9}
          allsuppscores10 = {this.state.allsuppscores10}
          allsupplementnames1 = {this.state.allsupplementnames1}
          allsupplementnames2 = {this.state.allsupplementnames2}
          allsupplementnames3 = {this.state.allsupplementnames3}
          allsupplementnames4 = {this.state.allsupplementnames4}
          allsupplementnames5 = {this.state.allsupplementnames5}
          allsupplementnames6 = {this.state.allsupplementnames6}
          allsupplementnames7 = {this.state.allsupplementnames7}
          allsupplementnames8 = {this.state.allsupplementnames8}
          allsupplementnames9 = {this.state.allsupplementnames9}
          allsupplementnames10 = {this.state.allsupplementnames10}
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
