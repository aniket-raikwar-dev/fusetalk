import React, { useState } from "react";
import ArrowRightSvg from "../assets/arrow-right-long-line.svg";
import { RiMailFill } from "react-icons/ri";
import { supabase } from "../supabase/supabaseClient.js";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [showLoader, setshowLoader] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmailVerificationLink = async () => {
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setshowLoader(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/home`,
        },
      });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        navigate("/send-email");
        setMessage("Check your email for the login link!");
      }
      setshowLoader(false);
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
      console.error(err);
      setshowLoader(false);
    }
  };

  return (
    <div className="base-screen">
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

      <div className="auth-box">
        <h4 className="login-head">Let's Be Join Us.</h4>
        <h4 className="login-head">Communicate's Together Better.</h4>

        <p className="login-para">
          Start here. One email. Infinite conversations.
        </p>
        <div style={{ marginTop: "40px" }}>
          <p className="label">Email Address</p>
          <div className="email-input">
            <div className="email-icon">
              <RiMailFill size={24} />
            </div>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
        </div>
        {message && (
          <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
        )}
      </div>

      <button
        onClick={sendEmailVerificationLink}
        className={`base-btn ${!isValidEmail(email) ? "disabled-btn" : ""}`}
        disabled={!isValidEmail(email)}
      >
        {showLoader ? (
          <BarLoader />
        ) : (
          <>
            {" "}
            Send Email
            <img src={ArrowRightSvg} alt="" />
          </>
        )}
      </button>

      <p className="copyright">ⓒ all rights reserved to fusetalk.</p>
    </div>
  );
};

export default Login;
