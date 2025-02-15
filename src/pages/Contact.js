import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).length; // Count words in the message
      if (wordCount > 500) {
        setErrorMessage('Your message cannot exceed 500 words.');
        return; // Prevent further updates if the limit is exceeded
      } else {
        setErrorMessage(''); // Clear error message when within limit
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
   
    alert('Message submitted!');
  };

  return React.createElement(
    'section',
    { className: 'contact container' },
    React.createElement(
      'h1',
      { style: { color: 'white', textAlign: 'center' } }, // Change color to white
      'Contact Me'
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', {
        type: 'text',
        name: 'name',
        placeholder: 'Your Name',
        value: formData.name,
        onChange: handleChange,
       // required: true
      }),
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: 'Your Email',
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('textarea', {
        name: 'message',
        placeholder: 'Your Message',
        value: formData.message,
        onChange: handleChange,
        required: true
      }),
      errorMessage &&
        React.createElement('p', { style: { color: 'red', marginTop: '5px' } }, errorMessage),
      React.createElement('button', { type: 'submit', disabled: !!errorMessage }, 'Send') 
    ),
    React.createElement(
      'div',
      { style: { marginTop: '20px', color: 'white', textAlign: 'center' } },
      React.createElement('p', null, 'Email: abatealemu52@gmail.com'),
      React.createElement('p', null, 'Phone: +251 901 2962'),
      React.createElement('p', null, 'Location: Addis Ababa, Ethiopia')
    )
  );
};

export default Contact;
