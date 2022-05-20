import ContactText from "./Contact/ContactText";
import ContactImage from "./Contact/ContactImage";
import ContactList from "./Contact/ContactList";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(90px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-90px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


function Contact() {
    return(<div className="contact">
                <Reveal keyframes={revealRight} triggerOnce duration={2500}>
                    <div>
                        <ContactText />
                        <ContactList />
                    </div>
                </Reveal>

                <Reveal keyframes={revealLeft} triggerOnce duration={2500}><ContactImage /></Reveal>
            </div>)
}

export default Contact