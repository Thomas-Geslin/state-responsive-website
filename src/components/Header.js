import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-scroll";

function fixedHeader() {
    const header = document.getElementById('header');
        if (document.documentElement.scrollTop > 20) {
            header.classList.add('onscroll');
        } else {
            header.classList.remove('onscroll');
        }
}
window.onscroll = fixedHeader;

function Header ({ darkTheme, setDarkTheme }) {
    return darkTheme!=='dark' ? (<div className='header' id='header'> 
                                    <Link to="home" smooth={true} duration={750}>
                                    <div className='header__brand'>
                                        <h1 className='header__brand__title'>Holux</h1>
                                        <FontAwesomeIcon icon={faHouse} />
                                    </div>
                                    </Link>

                                    <div className='header__nav'>
                                        <ul className='header__nav__list'>
                                            <Link to="home" smooth={true} duration={750}><li>Home</li></Link>
                                            <Link to="popular" smooth={true} offset={-150} duration={750}><li>Residences</li></Link>
                                            <Link to="value" smooth={true} offset={-150} duration={750}><li>Value</li></Link>
                                            <Link to="contact" smooth={true} offset={-150} duration={750}><li>Contact</li></Link>
                                            {darkTheme !=='dark' ? <li onClick={() => setDarkTheme('dark')}><FontAwesomeIcon icon={faMoon} className='header__nav__list__icon' /></li>
                                                                : <li onClick={() => setDarkTheme('light')}><FontAwesomeIcon icon={faSun} className='header__nav__list__icon' /></li>}
                                        </ul>
                                        <button className='header__nav__button'>Subscribe</button>
                                    </div>
                                </div>)

                              : (<div className='header darkHeader'> 
                                    <Link to="home" smooth={true} duration={750}>
                                    <div className='header__brand'>
                                        <h1 className='header__brand__title'>Holux</h1>
                                        <FontAwesomeIcon icon={faHouse} />
                                    </div>
                                    </Link>

                                    <div className='header__nav'>
                                        <ul className='header__nav__list'>
                                            <Link to="home" smooth={true} duration={750}><li>Home</li></Link>
                                            <Link to="popular" smooth={true} offset={-150} duration={750}><li>Residences</li></Link>
                                            <Link to="value" smooth={true} offset={-150} duration={750}><li>Value</li></Link>
                                            <Link to="contact" smooth={true} offset={-150} duration={750}><li>Contact</li></Link>
                                            {darkTheme !=='dark' ? <li onClick={() => setDarkTheme('dark')}><FontAwesomeIcon icon={faMoon} className='header__nav__list__icon' /></li>
                                                                : <li onClick={() => setDarkTheme('light')}><FontAwesomeIcon icon={faSun} className='header__nav__list__icon' /></li>}
                                        </ul>
                                        <button className='header__nav__button'>Subscribe</button>
                                    </div>
                                </div>)
}

export default Header