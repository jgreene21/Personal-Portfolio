import React from "react";
import { Segment, Image } from "semantic-ui-react";
import Message from "../images/Message.svg";

const Footer = () => (
  <>
    <div
      style={{ marginTop: "100px", textAlign: "center", marginBottom: "100px" }}
    >
      <h1 className="message">Lets Work Together!</h1>
      <h3 className="description">
        Currently looking for a great place and team to begin my
        <br />
        design and development career. Would love to hear from you.
      </h3>
      <br />
      <a 
      className="hvr-grow-shadow"
      href="mailto:julesgreene.slc@gmail.com">
        <Image src={Message} centered />
      </a>
    </div>
<Segment inverted className="footer">
<h3 className="links" style={{ marginTop: "40px" }}>
  <a
    className="hvr-grow-shadow"
    style={{ color: "#d573c5" }}
    href="https://github.com/jgreene21"
  >
    Github
  </a>
  <span style={{ marginLeft: "40px" }}>
    <a
      className="hvr-grow-shadow"
      style={{ color: "#d573c5" }}
      href="https://www.linkedin.com/in/julie-greene-slc/"
    >
      Linkedin
    </a>
  </span>
  <span style={{ marginLeft: "40px" }}>
    <a
      className="hvr-grow-shadow"
      style={{ color: "#d573c5" }}
      href="https://www.instagram.com/julescgreene/"
    >
      Instagram
    </a>
  </span>
  <span style={{ marginLeft: "40px" }}>
    <a
      className="hvr-grow-shadow"
      href="mailto:julesgreene.slc@gmail.com"
    >
      {" "}
      Contact
    </a>
  </span>
</h3>
</Segment>
</>
);

export default Footer;