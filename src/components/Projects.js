import React from "react";
import { Segment, Image, Menu, Visibility } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutHeader from "../images/AboutHeader.svg";
import Footer from "./Footer";
import YellowButton from "../images/YellowButton.svg";
import GreenButton from "../images/GreenButton.svg";
import PinkButton from "../images/PinkButton.svg";
import PurpleButton from "../images/PurpleButton.svg";
import BrightPestSolution from "../images/BrightPestSolutions.svg";
import DevPointStore from "../images/DevPoint.svg";
import Rake from "../images/Rake.svg";
import DreamHome from "../images/Realtor.svg";
import Resume from "../images/Resume.pdf";

class Projects extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div className="menu-container">
            <Image src={AboutHeader} fluid />
            <Menu borderless
            fixed={fixed ? "top" : null}
            style={{ border: "none", boxShadow: "none", padding: "15px" }}>
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
                <a
                  className="hvr-grow-shadow"
                  href={Resume}
                >
                  <NavItems as={Menu.Item} style={style.menu}>
                    Resume
                  </NavItems>
                </a>
              </Position>
            </Menu>
          </div>
        </Visibility>
        <HeaderContainer>
          <StyledHeader>What I've Been Up To</StyledHeader>
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
        </HeaderContainer>
        <StyledSegment
          as={Segment}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #f8ee94",
          }}
          inverted
        >
            <Image src={BrightPestSolution} size="huge" centered />
          <ProjectName style={{ color: "#706B6B" }}>
            Bright Pest Solutions
          </ProjectName>
          <SubTitle style={{ color: "#706B6B" }}>
            client build for local small business
          </SubTitle>
          <Image src={YellowButton} centered className="hvr-grow-shadow" />
        </StyledSegment>
        <StyledSegment
          as={Segment}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #D573C5",
          }}
          inverted
        >
          <Image src={Rake} size="huge" centered />
          <ProjectName>Rake Salon</ProjectName>
          <SubTitle>web design package for salon</SubTitle>
          <Image src={PinkButton} centered className="hvr-grow-shadow" />
        </StyledSegment>
        <StyledSegment
          as={Segment}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #FD983A",
          }}
          inverted
        >
          <Image src={DevPointStore} size="huge" centered />
          <ProjectName>DevPoint Store</ProjectName>
          <SubTitle>e-commerce site</SubTitle>
          <a href="https://devpoint-labs-store-2020.herokuapp.com/">
            <Image src={GreenButton} centered className="hvr-grow-shadow" />
          </a>
        </StyledSegment>
        <StyledSegment
          as={Segment}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #A74AF0",
          }}
          inverted
        >
          <Image src={DreamHome} size="huge" centered />
          <ProjectName>Dream Home</ProjectName>
          <SubTitle>web design package for realtor</SubTitle>
          <Image src={PurpleButton} centered className="hvr-grow-shadow" />
        </StyledSegment>
        <Footer />
      </>
    );
  }
}

const HeaderContainer = styled.div`
   {
    text-align: center;
    margin-bottom: 75px;
    @media (max-width: 700px) {
      margin-bottom: 50px;
    }
  }
`;

const StyledHeader = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #d573c5;
    @media (max-width: 900px) {
      font-size: 22px;
    }
  }
`;

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
      font-size: 15px;
    }
  }
`;

const NavItems = styled.div`
   {
    font-size: 16px;
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
`;

const Position = styled.div`
   {
    position: absolute;
    right: 80px;
    top: 0px;
    @media (max-width: 1000px) {
      position: absolute;
      right: 0px;
      top: 0px;
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
    color: #ffffff;
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
    color: #ffffff;
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
`;

const StyledSegment = styled.div`
   {
    height: 675px;
    margin-top: -14px !important;
    border-radius: 0% !important;
    @media (max-width: 800px) {
      height: 640px !important;
    }
    @media (max-width: 700px) {
      height: 600px !important;
    }
    @media (max-width: 600px) {
      height: 500px !important;
    }
    @media (max-width: 500px) {
      height: 480px !important;
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
