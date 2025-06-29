import React, { useRef, useState } from "react";

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

const Login = () => {
  const [otpBoxes, setOtpBoxes] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleOTPChange = (e, index) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) return;

    const boxes = [...otpBoxes];
    boxes[index] = value;
    setOtpBoxes(boxes);

    if (value && index < otpBoxes.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // setIsBtnEnabled(boxes.every((otp) => otp !== ""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpBoxes[index] && index >= 0) {
      inputsRef.current[index - 1].focus();
    }
  };

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

      <div className="auth-box">
        <div>
          <p className="label">Phone Number</p>
          <div className="phone-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
            </svg>
            <input type="number" />
          </div>
        </div>
        <div>
          <p className="label">Enter the 6 - digit OTP code that we sent to</p>
          <p className="label"># # # # # # # 1 6 9</p>
          <div className="otp-box-container">
            {otpBoxes.map((otp, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                className="otp-box"
                id={index}
                value={otp}
                maxLength={1}
                onChange={(e) => handleOTPChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div className="resend-otp">Resend code in 00:14 s</div>
        </div>
      </div>

      <button className="splash-btn">
        Send OTP{" "}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
          <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
        </svg>
      </button>

      <p className="copyright">ⓒ all rights reserved to fusetalk.</p>
    </div>
  );
};

export default Login;
