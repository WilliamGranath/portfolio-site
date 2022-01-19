import React from "react";
import "./styles.css";

function Email() {
  return (
    <div className="container__Email">
      <h2 className="emailTitle">Get in touch</h2>
      <p className="text">
        I’m currently looking for any new opportunities. Whether you have a
        question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a
        className="email-link"
        href="mailto:williamgranath@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact Me
      </a>
    </div>
  );
}

export default Email;
