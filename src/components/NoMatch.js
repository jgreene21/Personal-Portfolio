import React from "react";
import { Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeButton from "../images/HomeButton.svg";
import NoMatchHeader from "../images/NoMatchHeader.svg";

const NoMatch = () => (
  <>
    <Image src={NoMatchHeader} fluid />
    <div style={{ marginTop: "75px", textAlign: "center", marginBottom: "170px" }}>
      <Link to="/" className="hvr-grow-shadow">
        <Image src={HomeButton} centered className="hvr-grow-shadow" />
      </Link>
    </div>
    <Segment inverted className="footer">
      <Links style={{ marginTop: "40px" }}>
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
            Contact
          </a>
        </span>
      </Links>
    </Segment>
  </>
);

const Links = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    @media (max-width: 700px) {
      font-size: 12px;
    }
  }
`;

export default NoMatch;
