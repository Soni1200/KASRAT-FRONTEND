import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out What We Have To Offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' type='none'>
          <CardItem 
                  src = './images/gym1.png'
                  text="Count Calories and Model Your Meal"
                  label='Workout'
                  path= '/BmrForm'
            /> 
            <CardItem 
                  src = './images/gym4.jpg'
                  text="Track Your Progress As You Go"
                  label='Workout'
                  path= '/Progress'
            /> 
            <CardItem 
                  src = './images/gym5.jpg'
                  text="Build Your Muscles With The Right Supplements"
                  label='Products'
                  path= '/Recommendation'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;