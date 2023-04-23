import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import FormSignup from './FormSignup';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = async (values) => {
        setIsSubmitted(true);
  };

  return (
    <div className='overall'>
    <>
    
    <div className='heading'>
  <h1>KASRAT</h1>
  <h3>Don't Sit, Get Fit!</h3>
</div>

      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-2.svg' alt='spaceship' />
        </div>
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
    </div>
  );
};

export default Form;