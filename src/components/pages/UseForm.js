import { useState, useEffect } from 'react';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add isSubmitted state

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0) {
      const url = 'http://localhost:5054/api/State/register';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data); // do something with the response data
        setIsSubmitted(true); // Update isSubmitted state when form is submitted successfully
        submitForm(values); // Call the submitForm function with form values
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        setIsSubmitted(true); // Update isSubmitted state when form is submitted successfully
      }
    },
    [errors,isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors, isSubmitted }; // Add isSubmitted to return object
};

export default useForm;
