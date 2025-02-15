import React from "react";

const SkillCard = ({ title, level }) => {
  return React.createElement(
    "div",
    { style: styles.card },
    React.createElement(
      "h3",
      { style: styles.title },
      title
    ),
    React.createElement(
      "div",
      { style: styles.progressBarContainer },
      React.createElement("div", {
        style: {
          ...styles.progressBar,
          width: `${level}%`, // Dynamic width based on proficiency level
        },
      })
    ),
    React.createElement(
      "p",
      { style: styles.level },
      `${level}% Proficient`
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
  title: {
    fontSize: "1.5rem",
    color: "#0077b6",
    marginBottom: "10px",
  },
  progressBarContainer: {
    background: "#f1f1f1",
    borderRadius: "10px",
    height: "10px",
    marginBottom: "10px",
    overflow: "hidden",
  },
  progressBar: {
    background: "#0077b6",
    height: "100%",
    borderRadius: "10px",
  },
  level: {
    fontSize: "0.9rem",
    color: "#333",
  },
};

export default SkillCard;
