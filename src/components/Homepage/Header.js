import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function fixedHeader() {
    let header = document.getElementById('header');
        if (document.documentElement.scrollTop > 20) {
            header.classList.add('onscroll');;
        } else {
            header.classList.remove('onscroll');
        }
}

function Header () {
    window.onscroll = fixedHeader;

    return (<div className='header' id='header'>
                <div className='header__brand'>
                    <h1 className='header__brand__title'>Holux</h1>
                    <FontAwesomeIcon icon={faHouse} />
                </div>

                <div className='header__nav'>
                    <ul className='header__nav__list'>
                        <li>Home</li>
                        <li>Residences</li>
                        <li>Value</li>
                        <li>Contact</li>
                        <li><FontAwesomeIcon icon={faMoon} className='header__nav__list__icon' /></li>
                    </ul>
                    <button className='header__nav__button'>Subscribe</button>
                </div>
            </div>)
}

export default Header