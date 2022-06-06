import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function itemAppearance() {
    const item = document.querySelector('.value__list__one__description');

    if(item.className === 'value__list__one__description') {
        item.classList.add('itemAppear');
    } else {
        item.classList.remove('itemAppear');
    }
}

function ValueList({ darkTheme }) {
    return darkTheme!=='dark' ? (<ul className='value__list'>
                                    <li className='value__list__one'>
                                        <div className='value__list__one__div' onClick={itemAppearance}>
                                            <FontAwesomeIcon icon={faShield} className='value__list__one__div__icon' />
                                            <p className='value__list__one__div__text'>Best interest rates on the market</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='value__list__one__div__down' />
                                        </div>
                                        <p className='value__list__one__description'>Price we provides is the best for you, we<br/>guarantee no price changes on your<br/>property due to various unexpected costs<br/>that may come.</p>
                                    </li>
                                    <li className='value__list__one'>
                                        <div className='value__list__one__div' onClick={itemAppearance}>
                                            <FontAwesomeIcon icon={faSquareXmark} className='value__list__one__div__icon' />
                                            <p className='value__list__one__div__text'>Prevent unstable prices</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='value__list__one__div__down' />
                                        </div>
                                        <p className='value__list__one__description'>Price we provides is the best for you, we<br/>guarantee no price changes on your<br/>property due to various unexpected costs<br/>that may come.</p>
                                    </li>
                                    <li className='value__list__one'>
                                        <div className='value__list__one__div'>
                                            <FontAwesomeIcon icon={faSquarePollVertical} className='value__list__one__div__icon' />
                                            <p className='value__list__one__div__text'>Best prices on the market</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='value__list__one__div__down' />
                                        </div>
                                    </li>
                                    <li className='value__list__one'>
                                        <div className='value__list__one__div'>
                                            <FontAwesomeIcon icon={faSquareCheck} className='value__list__one__div__icon' />
                                            <p className='value__list__one__div__text'>Security of your data</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='value__list__one__div__down' />
                                        </div>
                                    </li>
                                </ul>)

                              : (<ul className='darkValue__list'>
                                    <li className='darkValue__list__one'>
                                        <div className='darkValue__list__one__div' onClick={itemAppearance}>
                                            <FontAwesomeIcon icon={faShield} className='darkValue__list__one__div__icon' />
                                            <p className='darkValue__list__one__div__text'>Best interest rates on the market</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='darkValue__list__one__div__down' />
                                        </div>
                                        <p className='darkValue__list__one__description'>Price we provides is the best for you, we<br/>guarantee no price changes on your<br/>property due to various unexpected costs<br/>that may come.</p>
                                    </li>
                                    <li className='darkValue__list__one'>
                                        <div className='darkValue__list__one__div' onClick={itemAppearance}>
                                            <FontAwesomeIcon icon={faSquareXmark} className='darkValue__list__one__div__icon' />
                                            <p className='darkValue__list__one__div__text'>Prevent unstable prices</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='darkValue__list__one__div__down' />
                                        </div>
                                        <p className='darkValue__list__one__description'>Price we provides is the best for you, we<br/>guarantee no price changes on your<br/>property due to various unexpected costs<br/>that may come.</p>
                                    </li>
                                    <li className='darkValue__list__one'>
                                        <div className='darkValue__list__one__div'>
                                            <FontAwesomeIcon icon={faSquarePollVertical} className='darkValue__list__one__div__icon' />
                                            <p className='darkValue__list__one__div__text'>Best prices on the market</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='darkValue__list__one__div__down' />
                                        </div>
                                    </li>
                                    <li className='darkValue__list__one'>
                                        <div className='darkValue__list__one__div'>
                                            <FontAwesomeIcon icon={faSquareCheck} className='darkValue__list__one__div__icon' />
                                            <p className='darkValue__list__one__div__text'>Security of your data</p>
                                            <FontAwesomeIcon icon={faCaretDown} className='darkValue__list__one__div__down' />
                                        </div>
                                    </li>
                                </ul>)  
}

export default ValueList