import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa"; // Import additional icons for contact info

const Footer = () => {
  return React.createElement(
    "footer",
    {
      style: styles.footer,
    },
    React.createElement(
      "div",
      { style: styles.footerContent },
      React.createElement(
        "p",
        { style: styles.text },
        "© 2025 Abate Alemu 3rd Year Information System Student. All rights reserved."
      ),
      React.createElement(
        "div",
        { style: styles.contactInfo },
        React.createElement(
          "span",
          { style: styles.contactItem },
          React.createElement(FaPhone, { style: styles.icon }),
          " +251 901 5529 62"
        ),
        " | ", // Separator
        React.createElement(
          "span",
          { style: styles.contactItem },
          React.createElement(FaEnvelope, { style: styles.icon }),
          " abatealemu52@gmail.com"
        )
      )
    ),
    React.createElement(
      "ul",
      { style: styles.socialLinks },
      React.createElement(
        "li",
        { style: styles.socialItem },
        React.createElement(
          "a",
          { href: "https://github.com", style: styles.link },
          React.createElement(FaGithub, { style: styles.icon })
        )
      ),
      React.createElement(
        "li",
        { style: styles.socialItem },
        React.createElement(
          "a",
          { href: "https://www.linkedin.com/in/abate-alemu-90b549309?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzsr149DJQwuVN9MLqSDoxA%3D%3D", style: styles.link },
          React.createElement(FaLinkedin, { style: styles.icon })
        )
      ),
      React.createElement(
        "li",
        { style: styles.socialItem },
        React.createElement(
          "a",
          { href: "https://github.com", style: styles.link },
          React.createElement(FaTwitter, { style: styles.icon })
        )
      )
    )
  );
};

const styles = {
  footer: {
    background: "#0077b6",
    color: "white",
    textAlign: "center",
    padding: "10px 0", // Reduced padding for a smaller footer
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "0.8rem", // Small font size
    marginBottom: "5px",
  },
  contactInfo: {
    fontSize: "0.8rem", // Small font size for contact info
    display: "flex",
    gap: "5px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap", // Ensures proper wrapping on small screens
  },
  contactItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px", // Space between icon and text
  },
  icon: {
    fontSize: "1rem", // Smaller size for icons
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
    gap: "10px", // Reduced gap between icons
  },
  socialItem: {
    display: "inline",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem", // Adjusted icon size
    transition: "color 0.3s ease",
  },
};

export default Footer;
