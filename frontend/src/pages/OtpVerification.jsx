import React from "react";

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

const OtpVerification = () => {
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
        <div className="otp-container">
          <p className="label">Enter the 6 - digit OTP code that we sent to</p>
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
      </div>

      <button
        onClick={sendOtp}
        className={`splash-btn ${phoneNumber.length !== 10 && "disabled-btn"}`}
        disabled={phoneNumber.length !== 10}
      >
        {isOtpSent ? "Verify OTP" : "Send OTP"}
        <img src={ArrowRightSvg} alt="" />
      </button>

      <p className="copyright">ⓒ all rights reserved to fusetalk.</p>
    </div>
  );
};

export default OtpVerification;
