import house from '../../assets/contact.png'

function ContactImage({ darkTheme }) {
    return darkTheme!=='dark' ? (<img src={house} alt="Maison Moderne" className='contact__image' />)

                              : (<img src={house} alt="Maison Moderne" className='darkContact__image' />)
}

export default ContactImage