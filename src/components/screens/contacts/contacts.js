import * as React from "react";
import Email from "./email";
import ContactLinks from "./contact-links";
import "./styles.css";

function Contacts() {
  return (
    <div id="Contacts" className="screen">
      <Email />
      <ContactLinks />
    </div>
  );
}

export default Contacts;
