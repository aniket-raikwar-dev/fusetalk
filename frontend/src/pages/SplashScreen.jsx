import React from "react";
import SplashImg from "../assets/splash.jpeg";
import Img1 from "../assets/Config 2023_ оновлення Figma для співпраці дизайнерів та розробників.jpeg";
import Img2 from "../assets/download (1).gif";
import Img3 from "../assets/Enle Li.gif";
import Img4 from "../assets/IBM — Jordan Scott.gif";
import Img5 from "../assets/ILLO.gif";
import Img6 from "../assets/SIKB｜Explainer Video - BACILE _.gif";

const cityNames = [
  "San Francisco",
  "Toronto",
  "Amsterdam",
  "New York",
  "Bengaluru",
  "Cape Town",
  "Florida",
  "Delhi NCR",
  "São Paulo",
  "Los Angelos",
  "Mumbai",
  "Seattle",
];

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <h3>
        fuse
        <span>
          talk<sup>*</sup>
        </span>
      </h3>
      <p>
        Connect. Collaborate. <span style={{ fontStyle: "italic" }}>Fuse</span>{" "}
        it all.
      </p>
      <div className="rotated-city">
        <div className="scroll-track">
          {[...cityNames, ...cityNames].map((item, index) => (
            <div key={index} className="city">
              <svg
                className="dot"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(62,74,248,1)"
              >
                <path d="M12 0.5L16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5Z"></path>
              </svg>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="splash-img">
        <img src={Img2} alt="" />
      </div>
      <p className="tagline">The future of connected conversations.</p>
      <p className="tagline">
        Fuse people, ideas and conversation from workrooms to whispers — all in
        one place.
      </p>
      <button className="splash-btn">Continue</button>
    </div>
  );
};

export default SplashScreen;
