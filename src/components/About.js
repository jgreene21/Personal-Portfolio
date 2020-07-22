import React from "react";
import { Image, Grid, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Homepage from "../images/HomepageHeader.svg";
import Designer from "../images/Designer1.svg";
import Developer from "../images/Developer1.svg";
import Woman from "../images/Woman.svg";
import Mother from "../images/Mother1.svg";
import Footer from "./Footer";

const About = () => (
  <>
    <div className="menu-container">
      <Image src={Homepage} fluid />
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
    <Grid
      centered
      columns={2}
    >
      <Grid.Column width={6}>
        <DesignerText>I'm a Designer</DesignerText>
        <IntroItems>
          I focus on clean and simple design that aid in user experience not
          distract from it. I love color.
        </IntroItems>
      </Grid.Column>
      <Grid.Column width={4}>
        <ImageHolder2 as={Image} src={Designer}/>
      </Grid.Column>
    </Grid>
    <Grid
      centered
      columns={2}
    >
      <Grid.Column width={4}>
        <ImageHolder1 as={Image} src={Developer} />
      </Grid.Column>
      <Grid.Column width={6}>
        <DeveloperText>I'm a Developer</DeveloperText>
        <IntroItems>
          I can bring the design from the page to your site utilizing latest
          technologies to run across various devices.
        </IntroItems>
      </Grid.Column>
    </Grid>
    <Grid
      centered
      columns={2}
    >
      <Grid.Column width={6}>
        <WomanText>I'm a Woman</WomanText>
        <IntroItems>
          I’m excited to join the ranks of women in tech and do my part to
          encourage and help women thrive in that world.
        </IntroItems>
      </Grid.Column>
      <Grid.Column width={4}>
        <ImageHolder2 as={Image} src={Woman} />
      </Grid.Column>
    </Grid>
    <IntroHolder as={Grid}
      centered
      columns={2}
    >
      <Grid.Column width={4}>
        <ImageHolder1 as={Image} src={Mother} />
      </Grid.Column>
      <Grid.Column width={6}>
        <MotherText>I'm a Mother</MotherText>
        <IntroItems>
          I’m a mother to four and have gone from knowing less about computers
          than my two oldest sons to building websites. Now they think mom is
          pretty cool!
        </IntroItems>
      </Grid.Column>
    </IntroHolder>
    <Footer />
  </>
);

const NavItems = styled.div`
   {
    margin-right: 30px;
    font-size: 14px;
    @media (max-width: 700px) {
      font-size: 12px;
      margin-right: 10px;
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

const IntroHolder = styled.div`{
  margin-top: 75px;
  margin-left: 200px;
  @media (max-width: 850px) {
    margin-top: 50px;
    margin-left: 50px;
  }
}
`;

const ImageHolder1 = styled.div`{
  margin-left: 80px;
  @media (max-width: 850px) {
    margin-left: 0px;
    margin-top: 50px;
  }
}
`;

const ImageHolder2 = styled.div`{
  margin-left: 80px;
  @media (max-width: 850px) {
    margin-left: 0px;
    margin-top: 40px;
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
      right: 40px;
      top: 10px;
    }
  }
`;
const DesignerText = styled.p`{
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

const DeveloperText = styled.p`{
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

const WomanText = styled.p`{
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

const MotherText = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FD983A;
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
    textShadow: "2px 4px 6px rgba(0, 0, 0, 0.25)",
  },
};

export default About;
