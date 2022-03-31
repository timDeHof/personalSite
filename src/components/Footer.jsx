import React from "react";

function Header() {
  return (
    <footer>
      <nav className="social-media">
        <a className="sm sm-facebook" href="https://www.facebook.com/">
          <img
            src={require("../images/facebook logo_icon.png")}
            alt="facebook icon"
          />
        </a>
        <a className="sm sm-twitter" href="https://www.twitter.com/">
          <img
            src={require("../images/twitter logo_icon.png")}
            alt="twitter icon"
          />
        </a>
        <a className="sm sm-linkedin" href="https://www.linkedin.com/">
          <img
            src={require("../images/linkedin logo_icon.png")}
            alt="linkedin icon"
          />
        </a>
        <a className="sm sm-instagram" href="https://www.instagram.com/">
          <img
            src={require("../images/instagram logo_icon.png")}
            alt="instagram icon"
          />
        </a>
        <a className="sm sm-youtube" href="https://www.youtube.com/">
          <img
            src={require("../images/youtube logo_icon.png")}
            alt="youtube icon"
          />
        </a>
      </nav>
    </footer>
  );
}

export default Header;
