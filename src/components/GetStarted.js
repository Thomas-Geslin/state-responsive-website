import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-70px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function GetStarted() {
    return(<Reveal keyframes={reveal} triggerOnce duration={2500}>
                <div className="started">
                    <div className="started__content">
                        <h2 className="started__content__title">Get Started with Holux</h2>
                        <p className="started__content__text">Subscribe and find super attractive price quotes<br/>from us, Find your residence soon</p>
                        <button className="started__content__button">Get Started</button>
                    </div>
                </div>
            </Reveal>)
}

export default GetStarted