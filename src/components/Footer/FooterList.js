function FooterList({ darkTheme }) {
    return darkTheme!=='dark' ? (<ul className="footer__list">
                                    <li>
                                        <h3 className="footer__list__title">About</h3>
                                        <p>About Us</p>
                                        <p>Features</p>
                                        <p>News & Blog</p>
                                    </li>

                                    <li>
                                        <h3 className="footer__list__title">Company</h3>
                                        <p>How We Work?</p>
                                        <p>Capital</p>
                                        <p>Security</p>
                                    </li>

                                    <li>
                                        <h3 className="footer__list__title">Support</h3>
                                        <p>FAQs</p>
                                        <p>Support center</p>
                                        <p>Contact Us</p>
                                    </li>

                                    <li>
                                        <h3 className="footer__list__title">Follow us</h3>
                                        <div>
                                            
                                        </div>
                                    </li>
                                </ul>)

                              : (<ul className="footer__list">
                                    <li>
                                        <h3 className="darkFooter__list__title">About</h3>
                                        <p>About Us</p>
                                        <p>Features</p>
                                        <p>News & Blog</p>
                                    </li>

                                    <li>
                                        <h3 className="darkFooter__list__title">Company</h3>
                                        <p>How We Work?</p>
                                        <p>Capital</p>
                                        <p>Security</p>
                                    </li>

                                    <li>
                                        <h3 className="darkFooter__list__title">Support</h3>
                                        <p>FAQs</p>
                                        <p>Support center</p>
                                        <p>Contact Us</p>
                                    </li>

                                    <li>
                                        <h3 className="darkFooter__list__title">Follow us</h3>
                                        <div>
                                            
                                        </div>
                                    </li>
                                </ul>)
}

export default FooterList