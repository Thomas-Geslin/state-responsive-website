import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactList() {
    return(<div className='contact__list'>
                <div className='contact__list__one'>
                    <div className='contact__list__one__info'>
                        <FontAwesomeIcon icon={faPhone} className='contact__list__one__info__icon' />
                        <div className='contact__list__one__info__text'>
                            <p className='contact__list__one__info__text__title'>Call</p>
                            <p className='contact__list__one__info__text__number'>022.321.165.19</p>
                        </div>
                    </div>

                    <button className='contact__list__one__button'>Call Now</button>
                </div>

                <div className='contact__list__one'>
                    <div className='contact__list__one__info'>
                        <FontAwesomeIcon icon={faCommentDots} className='contact__list__one__info__icon' />
                        <div className='contact__list__one__info__text'>
                            <p className='contact__list__one__info__text__title'>Chat</p>
                            <p className='contact__list__one__info__text__number'>022.321.165.19</p>
                        </div>
                    </div>

                    <button className='contact__list__one__button'>Chat Now</button>
                </div>

                <div className='contact__list__one'>
                    <div className='contact__list__one__info'>
                        <FontAwesomeIcon icon={faVideo} className='contact__list__one__info__icon' />
                        <div className='contact__list__one__info__text'>
                            <p className='contact__list__one__info__text__title'>Video Call</p>
                            <p className='contact__list__one__info__text__number'>022.321.165.19</p>
                        </div>
                    </div>

                    <button className='contact__list__one__button contact__list__one__button--adapt'>Video Call Now</button>
                </div>

                <div className='contact__list__one'>
                    <div className='contact__list__one__info'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact__list__one__info__icon' />
                        <div className='contact__list__one__info__text'>
                            <p className='contact__list__one__info__text__title'>Message</p>
                            <p className='contact__list__one__info__text__number'>022.321.165.19</p>
                        </div>
                    </div>

                    <button className='contact__list__one__button contact__list__one__button--adapt'>Message Now</button>
                </div>
            </div>)
}

export default ContactList