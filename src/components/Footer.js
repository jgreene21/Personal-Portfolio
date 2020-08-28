import React from "react";
import { Segment, Image, Modal, Icon } from "semantic-ui-react";
import Message from "../images/Message.svg";
import styled from 'styled-components';
import ViewResume from "../images/ViewResume.svg";
import Resume from "../PDF/Resume.pdf";
import MessageMe from "./MessageMe";
import ContactForm from "./ContactForm";

function Footer () {
  const [open, setOpen] = React.useState(false)
  return(
  <>
    <FooterContainer>
      <StyledFooter>Lets Work Together!</StyledFooter>
      <Yeah className="animate__animated animate__tada animate__slower">Yeah, Yeah, Yeah</Yeah>
      <Contact>Currently looking for a great place and team to start my journey in design and development. Also available for freelance work. Would love to hear from you.</Contact>
      <br />
        <MessageMe /> 
      <a 
      className="hvr-grow-shadow"
        href={Resume}>
          <Image src={ViewResume} centered style={{padding: "10px"}}/> 
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
  <span style={{marginLeft: "5vw"}}>
    <a
      className="hvr-grow-shadow"
      style={{ color: "#d573c5" }}
      href="https://www.linkedin.com/in/julie-greene-slc/"
    >
      Linkedin
    </a>
  </span>
  <span style={{marginLeft: "5vw"}}>
    <a
      className="hvr-grow-shadow"
      style={{ color: "#d573c5" }}
      href="https://www.instagram.com/julescgreene/"
    >
      Instagram
    </a>
  </span >
  <span style={{marginLeft: "5vw"}}>
  <Modal
      closeIcon 
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<p style={{cursor: "pointer", color: "#d573c5" }} className="hvr-grow-shadow"> Contact </p>}
    >
      <ContactForm  />
    </Modal>
  </span>
</Links>
</Segment>
</>
)
  };

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
const Yeah = styled.p`{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin-top: -15px;
  text-align: center;
  color: #d573c5;
  @media(max-width: 700px) {
    font-size: 18px
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
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  @media(max-width: 700px) {
    font-size: 15px;
    width: 420px;
    }
    @media(max-width: 475px) {
      font-size: 15px;
      width: 350px;
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
  @media(max-width: 400px) {
    font-size: 12px;
  }
}
`

export default Footer;