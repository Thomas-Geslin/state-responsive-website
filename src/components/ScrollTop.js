import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-scroll";

function appear() {
    let scrollTop = document.getElementById('scroll');
        if (document.documentElement.scrollTop > 500) {
            scrollTop.classList.remove('scrollAppear');
        } else {
            scrollTop.classList.add('scrollAppear');
        }
}

function ScrollTop() {
    return(<div>
                <Link to="home" smooth={true} duration={500}>
                <FontAwesomeIcon icon={faAnglesUp} className='scroll scrollAppear' id='scroll' /> 
                </Link> 
           </div>)
}

export default ScrollTop