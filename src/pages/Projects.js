import React, { useState, useEffect } from "react";
import irImage from "../assets/images/ir.jpg";
import onlineImage from "../assets/images/online.jpeg";
import botImage from "../assets/images/bot.jpg";

const staticProjects = [
  {
    title: "Retrieval System For Sidaamu Afoo",
    description:
      "A retrieval system designed to improve information access for the Sidaamu Afoo language community, This project involved creating a retrieval system specifically designed for Sidaamu Afoo, a Cushitic language spoken in Ethiopia. The system aims to improve access to information, linguistic resources, and cultural content for the Sidaamu Afoo community.",
    image: irImage,
  },
  {
    title: "Online Examination System for Addis Ababa University",
    description: "A system designed to manage and conduct online exams efficiently for students of Addis Ababa University.",
    image: onlineImage,
  },
  {
    title: "Mini Auditor Telegram Bot",
    description:
      "Mini Auditor is a Telegram bot designed to simplify the process of financial auditing for small business owners. This bot helps with tracking expenses, organizing receipts, and generating basic reports.",
    image: botImage,
  },
];

const Projects = () => {
  const [likes, setLikes] = useState(staticProjects.map(() => 0)); // Likes for static projects
  const [githubProjects, setGithubProjects] = useState([]); // Projects from GitHub
  const [loading, setLoading] = useState(true);

  // Fetch repositories from GitHub
  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/abateIS/repos");
        const data = await response.json();
        const recentProjects = data.slice(0, 5); // Limit to the 5 most recent repositories
        setGithubProjects(recentProjects);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  // Handle like button click
  const handleLike = (index, isStaticProject = true) => {
    if (isStaticProject) {
      const updatedLikes = [...likes];
      updatedLikes[index] += 1;
      setLikes(updatedLikes);
    }
  };

  return (
    <div className="projects container" style={styles.container}>
      <h2 style={styles.sectionTitle}>Static Projects</h2>
      {staticProjects.map((project, index) => (
        <div className="project-card" key={index} style={styles.card}>
          <img src={project.image} alt={project.title} style={styles.image} />
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.description}>{project.description}</p>
          <button style={styles.likeButton} onClick={() => handleLike(index)}>
            👍 Like {likes[index]}
          </button>
        </div>
      ))}

      <h2 style={styles.sectionTitle}>Recent GitHub Projects</h2>
      {loading ? (
        <p>Loading GitHub projects...</p>
      ) : (
        githubProjects.map((repo, index) => (
          <div className="project-card" key={repo.id} style={styles.card}>
            <h3 style={styles.title}>{repo.name}</h3>
            <p style={styles.description}>{repo.description || "No description available."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View on GitHub
            </a>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  sectionTitle: {
    gridColumn: "1 / -1",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white", // Changed color to white
    textAlign: "center",
    margin: "20px 0",
  },
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  title: {
    fontSize: "1.2rem",
    color: "#0077b6",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    textAlign: "justify",
  },
  likeButton: {
    backgroundColor: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
  link: {
    color: "#0077b6",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "10px",
    display: "inline-block",
  },
};

export default Projects;
