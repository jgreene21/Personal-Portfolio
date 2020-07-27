import React from "react";
import { Segment, Image } from "semantic-ui-react";
import Message from "../images/Message.svg";
import styled from 'styled-components';

const Footer = () => (
  <>
    <FooterContainer>
      <StyledFooter>Lets Work Together!</StyledFooter>
      <Contact>Currently looking for a great place and team to start 
        <br/>my journey in design and development. Also 
        <br/>available for freelance work. Would love to hear from you.</Contact>
      <br />
      <a 
      className="hvr-grow-shadow"
      href="mailto:julesgreene.slc@gmail.com">
        <Image src={Message} centered />
      </a>
      </FooterContainer>
<Segment inverted className="footer">
<Links style={{marginTop: "40px"}}>
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

const FooterContainer = styled.div `
{
  margin-top: 75px; 
  text-align: center; 
  margin-bottom: 75px;
  @media(max-width: 700px) {
    margin-top: 50px;
    margin-bottom: 50px;
    }
}
`;

const StyledFooter = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #d573c5;
  @media(max-width: 700px) {
    font-size: 22px
    }
}
`
const Contact = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #706b6b;
  text-align: center;
  @media(max-width: 700px) {
    font-size: 15px;
    }
}
`

const Links = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  @media(max-width: 700px) {
    font-size: 14px;
  }
}
`

export default Footer;