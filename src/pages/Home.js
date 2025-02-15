import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";
import test1Image from "../assets/images/test1.jpg";
import alphaImage from "../assets/images/alpha.jpeg";
import ahmedImage from "../assets/images/ahmed.jpeg";
import eslamImage from "../assets/images/eslam.jpeg";
import emiyImage from "../assets/images/emiy.jpeg";
import mikyImage from "../assets/images/miky.jpg";
import saraImage from "../assets/images/sara.jpeg";

const testimonials = [
  {
    name: "Biniam Billiso",
    photo: test1Image,
    position: "Engineering Student",
    quote: "Abate Alemu is a skilled student with a strong background in front-end and back-end technologies.With expertise in HTML, CSS, JavaScript, and modern frameworks such as React and Vue.js, Abate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient. ",
  },
  {
    name: "Alpha Lencho",
    position: "IS Student",
    photo: alphaImage,
    quote: "Beyond his technical abilities, Abate is a very proactive and capable student. Abate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient.",
  },
  {
    name: "Ahmed Magdy",
    photo: ahmedImage,
    position: "UX/UI Designer",
    quote: "I am confident that Abate Alemu possesses the skills, knowledge, and dedication.Abate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient.",
  },
  {
    name: "Eslam Abdelaziz",
    photo: eslamImage,
    position: "Software Engineer",
    quote: "Abate is a diligent and committed student, always willing to go the extra mile Abate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient.",
  },
  {
    name: "Emily Davis",
    photo: emiyImage,
    position: "Software Engineer",
    quote: "I am confident that Abate Alemu possesses the skills, knowledge, and dedicationAbate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient.",
  },
  {
    name: "Michael Lee",
    photo: mikyImage,
    position: "Software Engineer",
    quote: "Abate is a diligent and committed student, always willing to go the extra mile Abate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient.",
  },
  {
    name: "Sarah Wilson",
    photo: saraImage,
    position: "Software Engineer",
    quote: "Beyond his technical abilities, Abate is a very proactive and capable student Abate is adept at creating dynamic, user-friendly web applications. Proficient in Node.js and databases like MongoDB, he can build full-stack solutions that are both functional and efficient.",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
      );
    }, 5000); // 6 seconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Manually slide to the next set of testimonials
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  // Manually slide to the previous set of testimonials
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return React.createElement(
    motion.div,
    {
      className: "home container",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 },
      style: { textAlign: "center", padding: "20px" },
    },
    React.createElement("h1", { style: { color: "white" } }, "Welcome to My Portfolio"),
    React.createElement(
      motion.p,
      { 
        initial: { x: 200 },
        animate: { x: 0 },
        transition: { duration: 1.5, ease: "easeOut" },
      },
      "Explore my projects and get in touch with me to collaborate!"
    ),
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        },
      },
      React.createElement(
        "button",
        { onClick: handlePrev, style: styles.button },
        "<"
      ),
      React.createElement(
        "div",
        { style: styles.slider },
        testimonials
          .slice(currentIndex, currentIndex + 2)
          .map((testimonial, index) =>
            React.createElement(TestimonialCard, {
              key: index,
              name: testimonial.name,
              photo: testimonial.photo,
              quote: testimonial.quote,
              position: testimonial.position,
            })
          )
      ),
      React.createElement(
        "button",
        { onClick: handleNext, style: styles.button },
        ">"
      )
    )
  );
};

const styles = {
  slider: {
    display: "flex",
    gap: "20px",
    overflow: "hidden",
  },
  button: {
    background: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
