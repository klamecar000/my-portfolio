import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  // Form state to store user inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_9lcxw99',  // Replace with your EmailJS service ID
        'template_piyo6cl',  // Replace with your EmailJS template ID
        e.target,            // Use the form DOM reference to capture input data
        'zl0lkIeu_bmn8FXDu'       // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Something went wrong, please try again later.');
        }
      );

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <header>
        {/* Logo */}
        <img src="/Assets/CK Studios Logo V2 (White on Black).png" alt="CK Studios Logo" />
        {/* Navigation */}
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Other sections of your website */}
      <section id="home">
        <h2>Welcome to CK Studios</h2>
        <p>Your creative partner for filmmaking and photography.</p>
      </section>

      <section id="home">
        <h2>About Us</h2>
        <p>We specialize in capturing moments through high-quality photos and videos for all your events and needs.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Wedding Photography</li>
          <li>Commercial Filmmaking</li>
          <li>Portrait Photography</li>
          {/* Add more services here */}
        </ul>
      </section>

      <section id="portfolio">
        <h2>Our Portfolio</h2>
        <p>Check out some of our recent work!</p>
        {/* Add portfolio items here */}
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Please reach out if you're interested in our services or have any questions.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 CK Studios. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
