import React from 'react';
import {Image, Modal,} from 'semantic-ui-react';
import Message from "../images/Message.svg";
import ContactForm from "./ContactForm";

function MessageMe() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon 
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Image src={Message} centered style={{padding: "10px", cursor: "pointer"}} className="hvr-grow-shadow"/>}
    >
      <ContactForm />
    </Modal>
  )
};

export default MessageMe;