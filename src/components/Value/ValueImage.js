import house from '../../assets/value.jpg'

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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

function ValueImage({ darkTheme }) {
    return darkTheme!=='dark' ? (<Reveal keyframes={revealRight} triggerOnce duration={2500}><img src={house} alt="Maison Moderne" className='value__image' /></Reveal>)
                              : (<Reveal keyframes={revealRight} triggerOnce duration={2500}><img src={house} alt="Maison Moderne" className='darkValue__image' /></Reveal>)
}

export default ValueImage