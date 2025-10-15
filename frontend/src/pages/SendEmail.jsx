import React from "react";
import SuccessGIF from "../assets/Affirm Success Animation.gif";

const SendEmail = () => {
  const openGmailApp = () => {
    // window.open("https://mail.google.com/", "_blank");
    const gmailUrlScheme = "googlegmail://co";
    const webFallback = "https://mail.google.com/";

    // For web, always open in new tab
    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = gmailUrlScheme;
      setTimeout(() => {
        // fallback to web if app not installed
        window.open(webFallback, "_blank");
      }, 500);
    } else {
      // For desktop / iOS, just open web Gmail
      window.open(webFallback, "_blank");
    }
  };

  return (
    <div className="base-screen send-email-screen">
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
        <div className="send-email-text">Email sent success !</div>
        <div className="send-email-icon">
          <img src={SuccessGIF} alt="" />
        </div>
      </div>

      <button onClick={openGmailApp} className="base-btn">
        Open Gmail
      </button>
    </div>
  );
};

export default SendEmail;
