import React from "react";
import { Image, Grid, Menu, Visibility } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Homepage from "../images/HomepageHeader.svg";
import Designer from "../images/Designer.svg";
import Developer from "../images/Developer.svg";
import Woman from "../images/Woman.svg";
import Mother from "../images/Mother.svg";
import Footer from "./Footer";
import Resume from "../PDF/Resume.pdf";

class About extends React.Component {
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
            <Image src={Homepage} fluid />
            <Menu
              borderless
              fixed={fixed ? "top" : null}
              style={{ border: "none", boxShadow: "none", padding: "15px" }}
            >
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
        <Grid centered columns={2}>
          <Grid.Column mobile={9} tablet={7} computer={5}>
            <DesignerText>I'm a Designer</DesignerText>
            <IntroItems>
              I focus on clean and simple design that aid in user experience not
              distract from it. I love using color to convey the right mood and emotion.
            </IntroItems>
          </Grid.Column>
          <Grid.Column mobile={5} computer={4}>
            <ImageHolder2
              as={Image}
              src={Designer} 
              className="animate__animated animate__fadeInRightBig"
            />
          </Grid.Column>
        </Grid>
        <Grid centered columns={2}>
          <Grid.Column mobile={5} computer={4}>
            <ImageHolder1
              as={Image}
              src={Developer}
              className="animate__animated animate__fadeInLeftBig"
            />
          </Grid.Column>
          <Grid.Column mobile={9} tablet={7} computer={5}>
            <DeveloperText>I'm a Developer</DeveloperText>
            <IntroItems>
              I can bring the design from the page to your site utilizing latest
              technologies to run across various devices to create an immersive digital experience.
            </IntroItems>
          </Grid.Column>
        </Grid>
        <Grid centered columns={2}>
          <Grid.Column mobile={9} tablet={7} computer={5}>
            <WomanText>I'm a Woman</WomanText>
            <IntroItems>
              I’m excited to join the ranks of women in tech and do my part to
              encourage and help women thrive in that world.
            </IntroItems>
          </Grid.Column>
          <Grid.Column mobile={5} computer={4}>
            <ImageHolder2
              as={Image}
              src={Woman}
              className="animate__animated animate__fadeInRightBig"
            />
          </Grid.Column>
        </Grid>
        <IntroHolder as={Grid} centered columns={2}>
          <Grid.Column mobile={5} computer={4}>
            <ImageHolder1
              as={Image}
              src={Mother}

              className="animate__animated animate__fadeInLeftBig"
            />
          </Grid.Column>
          <Grid.Column mobile={9} tablet={7} computer={5}>
            <MotherText>I'm a Mother</MotherText>
            <IntroItems>
              I’m a mother to four and have gone from knowing less about
              computers than my two oldest sons to building websites. Now they
              think mom is pretty cool!
            </IntroItems>
          </Grid.Column>
        </IntroHolder>
        
        <Footer />
      </>
    );
  }
}

const NavItems = styled.div`
   {
    font-size: 16px;
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
`;

const IntroItems = styled.div`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #706b6b;
    @media (max-width: 700px) {
      font-size: 14px;
    }
  }
`;


const IntroHolder = styled.div`
   {
    margin-top: 75px;
    margin-left: 200px;
    @media (max-width: 850px) {
      margin-top: 50px;
      margin-left: 50px;
    }
  }
`;

const ImageHolder1 = styled.div`
   {
    margin-left: 20%;
    @media (max-width: 1200px) {
      margin-left: 10%;
    }
    @media (max-width: 850px) {
      margin-left: 0px;
      margin-top: 50px;
    }
  }
`;

const ImageHolder2 = styled.div`
   {
    margin-left: 20%;
    @media (max-width: 1200px) {
      margin-left: 10%;
    }
    @media (max-width: 850px) {
      margin-left: 0px;
      margin-top: 40px;
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
const DesignerText = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #6cc8a1;
    @media (max-width: 850px) {
      font-size: 22px;
    }
  }
`;

const DeveloperText = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #a74af0;
    @media (max-width: 850px) {
      font-size: 22px;
    }
  }
`;

const WomanText = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #4fc7ed;
    @media (max-width: 850px) {
      font-size: 22px;
    }
  }
`;

const MotherText = styled.p`
   {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #fd983a;
    @media (max-width: 850px) {
      font-size: 22px;
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

export default About;
