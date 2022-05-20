import FooterBrand from "./Footer/FooterBrand";
import FooterList from "./Footer/FooterList";
import FooterRights from "./Footer/FooterRights";

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

function Footer() {
    return(<div className="footer">
                <Reveal keyframes={reveal} cascade damping={0.2} triggerOnce duration={2500}>
                    <div className="footer__content">
                        <FooterBrand />
                        <FooterList />
                    </div>

                    <FooterRights />
                </Reveal>
            </div>)
}

export default Footer