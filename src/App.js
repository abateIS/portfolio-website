// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About"; // Import the About page
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Header),
      React.createElement(
        'main',
        null,
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { path: '/', element: React.createElement(Home) }),
          React.createElement(Route, { path: '/projects', element: React.createElement(Projects) }),
          React.createElement(Route, { path: '/about', element: React.createElement(About) }), // Add the About route 
          React.createElement(Route, { path: '/contact', element: React.createElement(Contact) })
        )
      ),
      React.createElement(Footer)
    )
  );
};

export default App;

