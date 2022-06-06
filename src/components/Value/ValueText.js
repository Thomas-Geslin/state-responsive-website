function ValueText({ darkTheme }) {
    return darkTheme!=='dark' ? (<div className="value__info" id="value">
                                    <p className="value__info__text">Our Value</p>
                                    <h2 className="value__info__h2">Value We Give To you<span className="value__info__h2--dot">.</span></h2>
                                    <p className="value__info__description">We always ready to help by providing the best service<br/>for you. We believe a good place to live can make your<br/>life better.</p>
                                </div>)

                              : (<div className="value__info" id="value">
                                    <p className="value__info__text">Our Value</p>
                                    <h2 className="darkValue__info__h2">Value We Give To you<span className="value__info__h2--dot">.</span></h2>
                                    <p className="value__info__description">We always ready to help by providing the best service<br/>for you. We believe a good place to live can make your<br/>life better.</p>
                                </div>)
}

export default ValueText