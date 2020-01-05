import React from "react";
import { projects } from "./static/projects";
import Feed from "./components/Feed";
import {BrowserRouter as Router} from 'react-router-dom';
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

shuffle(projects);

export default () => (
    <Router>
      <div className="container">
          <header>
              <h1><img src="https://i.imgur.com/trdF8yX.jpg" className="header-profile" alt="" /> Siraj Chokshi</h1>
              <a id="back-to-home" href="https://sirajchokshi.com">&larr; Back to main site</a>
              <div style={{clear: "both"}} />
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
