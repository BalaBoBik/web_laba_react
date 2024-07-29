import React, { useState } from 'react';
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import '../css/slider.css'
export const Slider = () => {
  const images = [
    'https://frankfurt.apollo.olxcdn.com/v1/files/ki05ixhlo63t2-KZ/image;s=4000x2500',
    'https://static.tildacdn.com/tild6232-6438-4861-a662-306566616565/ins_3_copy-2-2.png',
    'https://newizv.ru/attachments/9986c64eef4ff3c1abcc3f4439c36d44a48ec90f/store/crop/0/0/1920/1280/1920/0/0/85450478cfbff24ee693b98a52319477fa01e16c5c1559776b9049675cc0/a0b40b75624830b2bc86ca9585debc372d50d2c30bad9fd24604f0669951',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className='slider_container'>
        <div className="slider">
            <button className='left' onClick={goToPrevSlide}><AiFillLeftCircle /></button>
            <img src={images[currentIndex]} alt="Slider" />
            <button className='right' onClick={goToNextSlide}><AiFillRightCircle /></button>
        </div>
    </div>
  );
};
