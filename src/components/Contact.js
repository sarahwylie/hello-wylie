import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useForm } from "react-hook-form";

const ContactForm = () => {

  const { reset, register } = useForm();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState("Submit");

  const handleChange = e => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  console.log(formState);

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

//   useEffect(() => {
//     setTimeout(() => setFormState({ name: '', email: '', message: '' }), 1000);
// }, []);
// useEffect(() => {
//   reset(formState);
// }, [formState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
    setStatus("Sending...");
    try {
      await emailjs.send(
        'service_6u2bf58',
        'template_kq7laqf',
        formState,
        'EpzCtbo4UK_5HolGj'
      );
      toastifySuccess();
      setStatus("Submit");
      reset();
      } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className='contact-info animate__animated animate__slideInLeft'>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange}
            id="name" name="name" {...register('name')} required /></div>
        <div>
          <label htmlFor="email"> Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange}
            id="email" name="email" {...register('email')} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea defaultValue={message} onBlur={handleChange}
            id="message" rows="5" name="message" {...register('message')} required />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">{status}</button>
      </form>
      <ToastContainer />
    </section>
  )
}

export default ContactForm;