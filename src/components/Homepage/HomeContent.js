import HomeInput from "./HomeInput"
import home from "../../assets/home.jpg"

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const revealUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-70px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const revealDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function HomeContent({ darkTheme }) {
    return (<div id="home" className='homecontent'>
                <div className="homecontent__info">
                    <Reveal keyframes={revealUp} cascade damping={0.15} triggerOnce duration={2000}>
                        <h1 className="homecontent__info__title appear">Discover<br/>Most Suitable<br/>Property</h1>
                        <p className="homecontent__info__text appear">Find a variety of properties that suit you very easily, 
                            <br/>forget all difficulties in finding a residence for you</p>
                        <HomeInput darkTheme={darkTheme} />

                        <div className="homecontent__info__description appear">
                            <div>
                                <h2 className="homecontent__info__description__title">9K<span className="homecontent__info__description__title--plus">+</span></h2>
                                <p className="homecontent__info__description__text">Premium<br/>Product</p>
                            </div>
                            <div>
                                <h2 className="homecontent__info__description__title">2K<span className="homecontent__info__description__title--plus">+</span></h2>
                                <p className="homecontent__info__description__text">Happy<br/>Customer</p>
                            </div>
                            <div>
                                <h2 className="homecontent__info__description__title">28K<span className="homecontent__info__description__title--plus">+</span></h2>
                                <p className="homecontent__info__description__text">Award<br/>Winning</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
                
                <Reveal keyframes={revealDown} triggerOnce delay={800} duration={2500}>
                    <div className="homecontent__image">
                        <img src={home} alt="Devanture d'une maison moderne" className="homecontent__image__img" />
                        <div className="homecontent__image__border"></div>
                    </div>
                </Reveal>
            </div>)
}

export default HomeContent