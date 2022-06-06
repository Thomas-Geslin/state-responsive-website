import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Fonction permettant à la croix d'apparaitre quand on tape quelque chose
function markAppear() {
    const mark = document.getElementById('mark');
    mark.style.display = 'block';
}

// fonction permettant d'effacer contenu de l'input quand on clique sur la croix
function clearInput() {
    const input = document.getElementById('input');
    input.value = '';

    const mark = document.getElementById('mark');
    mark.style.display = 'none';
}

function HomeInput({ darkTheme }) {
    /* Input de la première partie de la page */
    return darkTheme!=='dark' ? (<form className="form">
                                    <FontAwesomeIcon icon={faLocationDot} className="form__icon" />
                                    <input placeholder="Search by location..." onChange={markAppear} className="form__input" id='input'></input>
                                    <FontAwesomeIcon icon={faXmark} onClick={clearInput} className="form__mark" id='mark' />
                                    <button className="form__button">Search</button>
                                </form>)

                              : (<form className="form darkForm">
                                    <FontAwesomeIcon icon={faLocationDot} className="form__icon" />
                                    <input placeholder="Search by location..." onChange={markAppear} className="darkForm__input" id='input'></input>
                                    <FontAwesomeIcon icon={faXmark} onClick={clearInput} className="form__mark" id='mark' />
                                    <button className="form__button">Search</button>
                                </form>)
}

export default HomeInput