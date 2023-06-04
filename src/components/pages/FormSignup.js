import React from 'react';
import ValidateInfo from './ValidateInfo';
import UseForm from './UseForm';

import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    ValidateInfo
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>SIGN UP</h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='confirmpassword'
            placeholder='Confirm your password'
            value={values.confirmpassword}
            onChange={handleChange}
          />
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Role</label>
          <select
            className='form-input'
            name='role'
            value={values.role}
            onChange={handleChange}
          >
            <option value=''>Select a role</option>
            <option value='admin'>Admin</option>
            <option value='public'>Public</option>
          </select>
          {errors.role && <p>{errors.role}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/sign-in'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
