import logo from '../../assets/favicon.png'

function FooterBrand() {
    return(<div className='footer__brand'>
                <div className='footer__brand__title'>
                    <p className='footer__brand__title__name'>Holux</p>
                    <img src={logo} alt="Logo de la marque Holux"  className='footer__brand__title__image' />
                </div>

                <p className='footer__brand__text'>Our vision is to make all people<br/>the best place to live for them.</p>
            </div>)
}

export default FooterBrand