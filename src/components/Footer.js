import React from "react";
import { Segment, Image } from "semantic-ui-react";
import Message from "../images/Message.svg";
import styled from 'styled-components';

const Footer = () => (
  <>
    <div
      style={{ marginTop: "75px", textAlign: "center", marginBottom: "75px" }}
    >
      <StyledHeader>Lets Work Together!</StyledHeader>
      <Contact>Currently looking for a great place and team to start 
        <br/>my journey in design and development. Also 
        <br/>available for freelance work. Would love to hear from you.</Contact>
      <br />
      <a 
      className="hvr-grow-shadow"
      href="mailto:julesgreene.slc@gmail.com">
        <Image src={Message} centered />
      </a>
    </div>
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

const StyledHeader = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #d573c5;
  @media(max-width: 900px) {
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
  @media(max-width: 900px) {
    font-size: 17px;
    }
}
`

const Links = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  @media(max-width: 900px) {
    font-size: 12px;
  }
}
`

export default Footer;