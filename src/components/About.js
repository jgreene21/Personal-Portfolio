import React from "react";
import { Segment, Image, Icon } from "semantic-ui-react";
import styled from "styled-components";
import AboutHeader from "../images/About Header.svg";
import Footer from "./Footer";
import YellowButton from "../images/yellowbutton.svg";
import GreenButton from "../images/greenbutton.svg";
import PinkButton from "../images/PinkButton.svg";
import PurpleButton from "../images/PurpleButton.svg";
import OrangeButton from "../images/orangebutton.svg";

const About = () => (
  <>
    <Image src={AboutHeader} fluid />
    <div
      style={{ marginTop: "75px", marginBottom: "75px", textAlign: "center" }}
    >
      <Contact>
        Here is a selection of some of my first projects.
        <br />
        For more of my work visit my
        <span style={{padding: "5px"}}>
          <a
            className="hvr-grow-shadow"
            style={{ color: "#d573c5" }}
            href="https://github.com/jgreene21"
          > 
            Github
          </a>
        </span>
        repository.
      </Contact>
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
      <h1 className="projects" style={{ color: "#706B6B" }}>
        Bright Pest Solutions
      </h1>
      <h3 className="sub-title" style={{ color: "#706B6B" }}>
        client build for local small business
      </h3>
      <div
        style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <Icon name="plus" size="big" style={{ color: "#706B6B" }}/>
      </div>
      <a href="https://devpoint-labs-store-2020.herokuapp.com/">
        <Image src={YellowButton} centered className="hvr-grow-shadow" />
      </a>
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
    >
      <h1 className="projects">DevPoint Store</h1>
      <h3 className="sub-title">e-commerce site</h3>
      <div
        style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <Icon name="plus" size="big" />
      </div>
      <Image src={GreenButton} centered className="hvr-grow-shadow" />
    </Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #A74AF0",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    >
      <h1 className="projects">Covid-19 Symptom Tracker</h1>
      <h3 className="sub-title">health informational site</h3>
      <div
        style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <Icon name="plus" size="big" />
      </div>
      <Image src={PurpleButton} centered className="hvr-grow-shadow" />
    </Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #FD983A",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    >
      <h1 className="projects">Pictionary</h1>
      <h3 className="sub-title">interactive web application game</h3>
      <div
        style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <Icon name="plus" size="big" />
      </div>
      <Image src={OrangeButton} centered className="hvr-grow-shadow" />
    </Segment>
    <Segment
      style={{
        height: "500px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #D573C5",
        marginTop: "-14px",
        borderRadius: "0%",
      }}
      inverted
    >
      <h1 className="projects">Rock Paper Scissors</h1>
      <h3 className="sub-title">interactive web application game</h3>
      <div
        style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <Icon name="plus" size="big" />
      </div>
      <Image src={PinkButton} centered className="hvr-grow-shadow" />
    </Segment>
    <Footer />
  </>
);

const Contact = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #706b6b;
  text-align: center;
  @media(max-width: 900px) {
    font-size: 17px;
    }
}
`

export default About;
