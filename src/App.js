import React from "react";
import "./css/index.css";

function App() {
  return (
    <div classNameName="App">
      <header>
        <h1 className="name">Timothy Tyler DeHof</h1>
        <nav className="links">
          <a href="index.html">HOME</a>
          <a href="about.html">ABOUT</a>
          <a href="portfolio.html">PORTFOLIO</a>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1 className="content-header">Developer, Engineer, Life-Learner</h1>
          <h2 className="content-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolore voluptate voluptatem necessitatibus maxime eveniet quasi
            enim, nostrum sit iste a laboriosam minima rem eos dolores voluptas
            ea illo molestias.
          </h2>
          <div className="content-quote">
            <p>
              <q>
                You have power over your mind — not outside events. Realize
                this, and you will find strength.
              </q>
              <br />- Marcus Aurelius
            </p>
          </div>
        </div>
      </main>
      <footer>
        <nav className="social-media">
          <a className="sm sm-facebook" href="https://www.facebook.com/">
            <img
              src={require("./images/facebook logo_icon.png")}
              alt="facebook icon"
            />
          </a>
          <a className="sm sm-twitter" href="https://www.twitter.com/">
            <img
              src={require("./images/twitter logo_icon.png")}
              alt="twitter icon"
            />
          </a>
          <a className="sm sm-linkedin" href="https://www.linkedin.com/">
            <img
              src={require("./images/linkedin logo_icon.png")}
              alt="linkedin icon"
            />
          </a>
          <a className="sm sm-instagram" href="https://www.instagram.com/">
            <img
              src={require("./images/instagram logo_icon.png")}
              alt="instagram icon"
            />
          </a>
          <a className="sm sm-youtube" href="https://www.youtube.com/">
            <img
              src={require("./images/youtube logo_icon.png")}
              alt="youtube icon"
            />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
