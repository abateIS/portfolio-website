import React from "react";

const TestimonialCard = ({ name, photo, quote, position }) => {
  return React.createElement(
    "div",
    { style: styles.card },
    React.createElement("img", {
      src: photo,
      alt: `${name}'s photo`,
      style: styles.photo,
    }),
    React.createElement(
      "h3",
      { style: styles.name },
      name
    ),
    React.createElement(
      "h4",
      { style: styles.position },
      position // Add position here
    ),
    React.createElement(
      "p",
      { style: styles.quote },
      `"${quote}"`
    )
  );
};

const styles = {
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
    margin: "10px",
  },
  photo: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  name: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "5px",
  },
  position: {
    fontSize: "1rem",
    color: "#555",
     
    marginBottom: "15px",
  },
  quote: {
    fontSize: "1rem",
    color: "#666",
    fontStyle: "italic",
  },
};

export default TestimonialCard;