import React from "react";
import SuccessGIF from "../assets/Affirm Success Animation.gif"

const SendEmail = () => {
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

      <div className="send-email-box">
        <div className="send-email-text">
            Email sent success !
        </div>
        <div className="send-email-icon">
            <img src={SuccessGIF} alt="" />
        </div>
      </div>

      <button
        // onClick={sendEmailVerificationLink}
        className="splash-btn"
      >
        Open Gmail
      </button>
    </div>
  );
};

export default SendEmail;
