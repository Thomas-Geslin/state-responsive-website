function HouseItem({ id, name, location, price, image, darkTheme }) {
    return darkTheme!=='dark' ? (<div key={id} className='card__new'>
                                    <img src={image} alt="Maison moderne" className='card__new__img' />
                                    <p className='card__new__price'><span className='card__new__price--dollar'>$</span>{price}</p>
                                    <h3 className='card__new__name'>{name}</h3>
                                    <p className='card__new__location'>{location}</p>
                                </div>) 

                              : (<div key={id} className='darkCard__new'>
                                    <img src={image} alt="Maison moderne" className='card__new__img' />
                                    <p className='card__new__price'><span className='card__new__price--dollar'>$</span>{price}</p>
                                    <h3 className='darkCard__new__name'>{name}</h3>
                                    <p className='card__new__location'>{location}</p>
                                </div>)
}

export default HouseItem