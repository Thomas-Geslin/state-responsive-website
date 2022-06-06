function PopularTitle({ darkTheme }) {
    return darkTheme!=='dark' ? (<div id="popular" className='title'>
                                    <p className="title__text">Best Choise</p>
                                    <h2 className="title__h2">Popular Residences<span className="title__h2--dot">.</span></h2>
                                </div>) 

                              : (<div id="popular" className='title'>
                                    <p className="title__text">Best Choise</p>
                                    <h2 className="title__h2__dark">Popular Residences<span className="title__h2--dot">.</span></h2>
                                </div>)
}

export default PopularTitle