import React, { useRef, useState } from "react";
import PhoneFillIcon from "../assets/phone-fill.svg";
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

const Login = () => {
  const [currentStep, setCurrentStep] = useState("phone");
  const [otpBoxes, setOtpBoxes] = useState(Array(6).fill(""));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOtpVerifyBtnEnabled, setIsOtpVerifyBtnEnabled] = useState(true);

  const inputsRef = useRef([]);

  const handlePhoneInputChange = (e) => {
    const { value } = e.target;
    if (value.length <= 10) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleOTPChange = (e, index) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) return;

    const boxes = [...otpBoxes];
    boxes[index] = value;
    setOtpBoxes(boxes);

    if (value && index < otpBoxes.length - 1) {
      inputsRef.current[index + 1].focus();
    }
    setIsOtpVerifyBtnEnabled(boxes.every((otp) => otp !== ""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpBoxes[index] && index >= 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  console.log("setIsOtpVerifyBtnEnabled: ", isOtpVerifyBtnEnabled);

  const sendOtp = () => {
    setCurrentStep("otp");
  };

  const verifyOtp = () => {};

  const handleEditPhoneNumber = () => {
    setCurrentStep("phone");
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
        {currentStep === "phone" && (
          <div>
            <h4 className="login-head">Communicate's Together Better. Let's Be Join Us.</h4>
            <p className="login-para">
              Start here. One number. Infinite conversations.
            </p>
            <div style={{ marginTop: "40px" }}>
              <p className="label">Phone Number</p>
              <div className="phone-input">
                <div className="phone-icon">
                  <img src={PhoneFillIcon} alt="phone" />
                </div>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={handlePhoneInputChange}
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === "otp" && (
          <div className="otp-container">
            <p className="label">
              Enter the <span style={{ fontWeight: "700" }}>6 - digit</span> OTP
              code that we sent to
            </p>
            <p className="label">{`# # # # # # # ${phoneNumber.slice(
              7,
              8
            )} ${phoneNumber.slice(8, 9)} ${phoneNumber.slice(9, 10)}`}</p>
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
            <div className="resend-otp">Resend code in 00:45 s</div>
          </div>
        )}
      </div>

      <button
        onClick={currentStep === "phone" ? sendOtp : verifyOtp}
        className={`splash-btn ${
          currentStep === "phone"
            ? phoneNumber.length !== 10 && "disabled-btn"
            : !isOtpVerifyBtnEnabled && "disabled-btn"
        }`}
        disabled={
          currentStep === "phone"
            ? phoneNumber.length !== 10
            : !isOtpVerifyBtnEnabled
        }
      >
        {currentStep === "otp" ? "Verify OTP" : "Send OTP"}
        <img src={ArrowRightSvg} alt="" />
      </button>

      {currentStep === "otp" && (
        <button onClick={handleEditPhoneNumber} className="edit-phone-btn">
          Edit Phone Number
        </button>
      )}

      <p className="copyright">ⓒ all rights reserved to fusetalk.</p>
    </div>
  );
};

export default Login;
