import prologis from '../assets/logo1.png'
import american from '../assets/logo2.png'
import equinix from '../assets/logo3.png'
import digital from '../assets/logo4.png'

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Icons() {
    return (<div className='icons'>
            <Reveal keyframes={reveal} cascade damping={0.1} triggerOnce duration={2000}>
                <img src={prologis} alt="Logo de la société Prologis" className='icons__logo' />
                <img src={american} alt="Logo de la société American Tower" className='icons__logo' />
                <img src={equinix} alt="Logo de la société Equinix" className='icons__logo' />
                <img src={digital} alt="Logo de la société Digital Reality" className='icons__logo' />
            </Reveal>
            </div>)
}

export default Icons