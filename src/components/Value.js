import ValueImage from "./Value/ValueImage";
import ValueText from "./Value/ValueText";
import ValueList from "./Value/ValueList";

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

function Value() {
    return(<div className="value">
                <ValueImage />

                <Reveal keyframes={revealLeft} triggerOnce duration={2500}>
                    <div>
                        <ValueText />
                        <ValueList />
                    </div>
                </Reveal>
            </div>)
}

export default Value