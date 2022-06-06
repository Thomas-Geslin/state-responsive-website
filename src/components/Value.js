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

function Value({ darkTheme }) {
    return(<div className="value">
                <ValueImage darkTheme={darkTheme} />

                <Reveal keyframes={revealLeft} triggerOnce duration={2500}>
                    <div>
                        <ValueText darkTheme={darkTheme} />
                        <ValueList darkTheme={darkTheme} />
                    </div>
                </Reveal>
            </div>)
}

export default Value