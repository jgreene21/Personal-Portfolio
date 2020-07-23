import React from "react";
import { Segment, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutHeader from "../images/AboutHeader.svg";
import Footer from "./Footer";
import YellowButton from "../images/YellowButton.svg";
import GreenButton from "../images/GreenButton.svg";
import PinkButton from "../images/PinkButton.svg";
import PurpleButton from "../images/PurpleButton.svg";
import OrangeButton from "../images/OrangeButton.svg";
import BPS from "../images/BPS.svg";
import BPS2 from "../images/BPS2.svg";
import DPS from "../images/DPS.svg";
import DPS2 from "../images/DPS2.svg";
import Pic from "../images/Pic.svg";
import Pic2 from "../images/Pic2.svg";

const Projects = () => (
  <>
    <div className="menu-container">
      <Image src={AboutHeader} fluid />
      <Menu borderless style={{ border: "none", boxShadow: "none" }}>
        <Position as={Menu.Menu} position="right">
          <Link to="/" className="hvr-grow-shadow">
            <NavItems as={Menu.Item} style={style.menu}>
              About
            </NavItems>
          </Link>
          <Link to="/projects" className="hvr-grow-shadow">
            <NavItems as={Menu.Item} style={style.menu}>
              Projects
            </NavItems>
          </Link>
          <a
            className="hvr-grow-shadow"
            href="mailto:julesgreene.slc@gmail.com"
          >
            <NavItems as={Menu.Item} style={style.menu}>
              Contact
            </NavItems>
          </a>
        </Position>
      </Menu>
    </div>
    <div style={{ marginBottom: "75px", textAlign: "center" }}>
      <Contact>
        Here is a selection of some of my first projects.
        <br />
        For more of my work visit my
        <span style={{ padding: "5px" }}>
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
    <StyledSegment as={Segment}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #f8ee94",
      }}
      inverted
    >
      <div style={{ textAlign: "center" }}>
        <Image.Group>
          <Image src={BPS} />
          <Image src={BPS2} />
        </Image.Group>
      </div>
      <ProjectName>Bright Pest Solutions</ProjectName>
      <SubTitle>client build for local small business</SubTitle>
        <Image src={YellowButton} centered className="hvr-grow-shadow" />
    </StyledSegment>
    <StyledSegment as={Segment}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #6CC8A1",
      }}
      inverted
    >
      <div style={{textAlign: "center"}}>
        <Image.Group>
          <Image src={DPS} />
          <Image src={DPS2} />
        </Image.Group>
      </div>
      <ProjectName>DevPoint Store</ProjectName>
      <SubTitle>e-commerce site</SubTitle>
      <a href="https://devpoint-labs-store-2020.herokuapp.com/">
      <Image src={GreenButton} centered className="hvr-grow-shadow" /></a>
    </StyledSegment>
    <StyledSegment as={Segment}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #A74AF0",
      }}
      inverted
    >
      <ProjectName>Covid-19 Symptom Tracker</ProjectName>
      <SubTitle>informational public health site</SubTitle>
      <Image src={PurpleButton} centered className="hvr-grow-shadow" />
    </StyledSegment>
    <StyledSegment as={Segment}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #FD983A",
      }}
      inverted
    >
      <div style={{ textAlign: "center" }}>
        <Image.Group>
          <Image src={Pic} />
          <Image src={Pic2} />
        </Image.Group>
      </div>
      <ProjectName>Pictionary</ProjectName>
      <SubTitle>interactive web application game</SubTitle>
      <Image src={OrangeButton} centered className="hvr-grow-shadow" />
    </StyledSegment>
    <StyledSegment as={Segment}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #D573C5",
      }}
      inverted
    >
      <ProjectName>Rock Paper Scissors</ProjectName>
      <SubTitle>interactive web application game</SubTitle>
      <Image src={PinkButton} centered className="hvr-grow-shadow" />
    </StyledSegment>
    <Footer />
  </>
);

const Contact = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #706b6b;
    text-align: center;
    @media (max-width: 700px) {
      font-size: 17px;
    }
  }
`;

const NavItems = styled.div`
   {
    margin-right: 30px;
    font-size: 16px;
    @media (max-width: 700px) {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;

const Position = styled.div`
   {
    position: absolute;
    right: 140px;
    top: 40px;
    @media (max-width: 1000px) {
      position: absolute;
      right: 0px;
      top: 10px;
    }
  }
`;

const ProjectName = styled.p`
   {
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #706b6b;
    mix-blend-mode: normal;
    margin-top: 20px;
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }
`;

const SubTitle = styled.p`
   {
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    text-transform: lowercase;
    color: #706b6b;
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
`;

const StyledSegment = styled.div`
   {
    height: 500px;
    margin-top: -14px !important;
    border-radius: 0% !important;
    @media (max-width: 800px) {
      height: 760px !important; 
    }
  }
`;

const style = {
  menu: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#706B6B",
  },
};

export default Projects;
