import React, { useState } from 'react';
import Slider from "react-slick";
import ShengCard from '../ShengCard';
import styles from "./ShengCarousel.module.scss";
import { typeShengData, shengDataType} from '../../../shared/Data/shengData';

const ShengCarousel = ({data}: any) => {
  const NextArrow = ({ onClick }: any) => {
    return (
      <button className={styles.carouselBtn} onClick={onClick}>
        next
      </button>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <button className={styles.carouselBtn} onClick={onClick}>
        Prev
      </button>
    );
  };
  
  const [imageIndex, setImageIndex] = useState(0);

  const settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setImageIndex(next),
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        { data?.map((item: shengDataType, index: number) =>
          (
            <div key={index} className={styles.carouselCard}>
              <ShengCard sheng={item.name} translation={item.translation} image={item.image}/>
            </div>
          )          
        )}
      </Slider>
    </div>
  )
}

export default ShengCarousel;