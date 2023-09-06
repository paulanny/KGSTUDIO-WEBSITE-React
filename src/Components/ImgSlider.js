import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImgSlider.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import imgOneSlide from "../assets/ourworks/1.png";
import imgTwoSlide from "../assets/ourworks/2.png";
import imgThreeSlide from "../assets/ourworks/3.png";
import imgFourSlide from "../assets/ourworks/4.png";
import imgFiveSlide from "../assets/ourworks/5.png";
import imgSixSlide from "../assets/ourworks/6.png";
import imgSevenSlide from "../assets/ourworks/7.png";
import imgEightSlide from "../assets/ourworks/8.png";
import imgNineSlide from "../assets/ourworks/9.png";
import imgTenSlide from "../assets/ourworks/10.png";
import imgElevenSlide from "../assets/ourworks/11.png";
import imgTwelveSlide from "../assets/ourworks/12.png";
import TextsCom from './TextsCom';

const ImgSlider = () => {
  return (
    <div className="container">
      <TextsCom
      className="teamtxtp"
        id="team"
        description="Some of our works"
        title="FEATURED DESIGNS"
        />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={imgOneSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgTwoSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgThreeSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFourSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFiveSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSixSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSevenSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgEightSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgNineSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgTenSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgElevenSlide} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgTwelveSlide} alt="slide_image" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <div className='sliderbtn'>
      <button className='seemore'>See more Designs</button>
      <button className='herobookdes'>Book a Design</button>
      </div>
    </div>
  );
}

export default ImgSlider;