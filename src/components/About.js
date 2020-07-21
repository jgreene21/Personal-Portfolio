import React from "react";
import { Segment, Image } from "semantic-ui-react";
import AboutHeader from "../images/About Header.svg";
import Footer from "./Footer";
import yellowbutton from "../images/yellowbutton.svg";

const About = () => (
  <>
    <Image src={AboutHeader} fluid />
    <div
      style={{ marginTop: "75px", marginBottom: "75px", textAlign: "center" }}
    >
      <h3 className="description">
        Here is a selection of some of my first projects.
        <br />
        For more of my work visit my
        <span style={{ color: "#D473C5" }}>
          <a
            className="hvr-grow-shadow"
            style={{ color: "#d573c5" }}
            href="https://github.com/jgreene21"
          >
            Github
          </a>
        </span>
        repository.
      </h3>
    </div>
    <Segment
      style={{
        height: "500px",

        marginTop: "-14px",
        borderRadius: "0%",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #f8ee94",
      }}
      inverted
    >
      <a href="https://devpoint-labs-store-2020.herokuapp.com/"><Image src={yellowbutton} centered className="hvr-grow-shadow"/></a>
    </Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #6CC8A1",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    ></Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #A74AF0",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    ></Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #FD983A",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    ></Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #D573C5",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    ></Segment>
    <Footer />
  </>
);

export default About;
