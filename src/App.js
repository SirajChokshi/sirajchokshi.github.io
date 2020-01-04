import React from "react";
import { projects } from "./static/projects";
import Feed from "./components/Feed";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(projects);

export default () => (
    <Router>
      <div className="container">
          <header>
              <h1><a href="https://sirajchokshi.com"><img src="https://i.imgur.com/trdF8yX.jpg" className="header-profile" alt="" /> Siraj Chokshi</a></h1>
              <div className="row">
                  <p id="bio">Hi, I’m Siraj. I’m a UX designer, frontend developer and student at UIUC. This website is a collection of my public repositories and open source contributions.</p>
                  <Filter />
              </div>
          </header>
          <Feed
              projects={projects}
          />
          <Footer />
      </div>
    </Router>
);
