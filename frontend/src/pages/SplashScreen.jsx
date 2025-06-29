import React from "react";
import SplashMotionImg from "../assets/SplashMotion.gif";
import { useNavigate } from "react-router-dom";
import ArrowRightSvg from "../assets/arrow-right-long-line.svg";

const cityNames = [
  "San Francisco",
  "Toronto",
  "Amsterdam",
  "New York",
  "Austin",
  "Bengaluru",
  "Cape Town",
  "Florida",
  "Delhi NCR",
  "São Paulo",
  "Los Angeles",
  "Mumbai",
  "Seattle",
  "Jakarta",
  "Chicago",
  "Stockholm",
  "Dublin",
];

const SplashScreen = () => {
  const navigate = useNavigate();

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
        <img src={SplashMotionImg} alt="" />
      </div>
      {/* <p className="desktop-warning">
        FuseTalk is designed only for mobile devices. Please open this site on a
        phone.
      </p> */}

      <p className="tagline">The future of connected conversations.</p>
      <p className="tagline">
        Fuse people, ideas and conversation from workrooms to whispers — all in
        one place.
      </p>

      <button className="splash-btn" onClick={() => navigate("/login")}>
        Join Us Now <img src={ArrowRightSvg} alt="" />
      </button>

      <p className="copyright">ⓒ all rights reserved to fusetalk.</p>
    </div>
  );
};

export default SplashScreen;
