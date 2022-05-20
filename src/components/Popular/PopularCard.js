import { houseList } from '../../datas/houseList'
import HouseItem from './HouseItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function PopularCard() {
      return(<Reveal keyframes={reveal} triggerOnce duration={2500}>
           <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
                navigation={{
                  prevEl: '.navigation__previous-ref',
                  nextEl: '.navigation__next-ref',
                }}
            >
                <div className='card'>
                    {houseList.map(({id, name, location, price, image}) => (
                        <SwiperSlide><HouseItem 
                            id={id}
                            name={name}
                            location={location}
                            price={price}
                            image={image}
                        /></SwiperSlide>
                    ))}
                </div>
                <div className='navigation'>
                  <div className='navigation__previous-ref'><FontAwesomeIcon icon={faAngleLeft} className='navigation__icon' /></div>
                  <div className='navigation__next-ref'><FontAwesomeIcon icon={faAngleRight} className='navigation__icon' /></div>
                </div>
            </Swiper>
            </Reveal>)
}

export default PopularCard