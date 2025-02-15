import React from "react";
import SkillCard from "../components/SkillCard";
import aboutImage from "../assets/images/about.jpg";

const skills = [
  { title: "JavaScript", level: 85 },
  { title: "React", level: 80 },
  { title: "HTML & CSS", level: 90 },
  { title: "Node.js", level: 70 },
  { title: "C#", level: 75 },
  { title: "Networking", level: 65 },
  { title: "Radio Voice over", level: 95 },
  { title: "UX/UI Design", level: 85 },
  { title: "Video Graphics", level: 75 },
  { title: "Classic Music", level: 80 },
];

const About = () => {
  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement("img", {
      src:aboutImage, 
      alt: "About image",
      style: styles.image,
    }),
    React.createElement(
      "div",
      { style: styles.bioContainer },
      React.createElement(
        "h1",
        { style: styles.heading },
        "About Me"
      ),
      React.createElement(
        "p",
        { style: styles.bio },
        " I’m Abate Alemu, a 3rd-year Information Systems student at Addis Ababa University. I am passionate about learning, growing, and building impactful solutions in the world of technology.My journey is driven by a strong eagerness to enhance my skills and explore new concepts, tools, and ideas. I thrive in environments that challenge me to think critically, innovate, and collaborate with others to create meaningful results.When I’m not studying or working on projects, I enjoy exploring emerging technologies, staying curious, and finding inspiration for my next big idea.Let’s connect and make something amazing together!"
      )
    ),
    React.createElement(
      "div",
      { style: styles.skillsContainer },
      React.createElement(
        "h2", 
        { style: styles.skillsHeading },
        "My Skills"
         
      ),
      React.createElement(
        "div",
        { style: styles.skillsGrid },
        skills.map((skill, index) =>
          React.createElement(SkillCard, {
            key: index,
            title: skill.title,
            level: skill.level,
          })
        )
      )
    )
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    margin: "20px auto",
    maxWidth: "800px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
  },
  bioContainer: {
    flex: "1",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "2rem",
    color: "#0077b6",
    marginBottom: "20px",
  },
  bio: {
    fontSize: "1.2rem",
    color: "#333",
    lineHeight: "1.6",
  },
  skillsContainer: {
    marginTop: "40px",
    textAlign: "center",
  },
  skillsHeading: {
    fontSize: "1.8rem",
    color: "#0077b6",
    marginBottom: "20px",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default About;
