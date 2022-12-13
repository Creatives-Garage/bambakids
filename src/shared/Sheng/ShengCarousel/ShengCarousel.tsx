import React, { useState } from "react";
import Button from "../../Button";
import ShengCard from "../ShengCard";
import styles from "./ShengCarousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { typeShengData, shengDataType } from "../../Data/shengData";

const ShengCarousel = ({ data }: any) => {
  const [imageIndex, setImageIndex] = useState(0);
  const length = data?.length;

  const settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: (
      <Button
        variant="normal"
        text="Next"
        action={() => setImageIndex(imageIndex + 1)}
      />
    ),
    prevArrow: (
      <Button
        variant="normal"
        text="Previous"
        action={() => setImageIndex(imageIndex - 1)}
      />
    ),
    beforeChange: (current: any, next: any) => setImageIndex(next),
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel 
        autoFocus={true} 
        centerMode={true} 
        width={"400px"}
        showStatus={false}
      >
        {data?.map((item: shengDataType, index: number) => (
          <div
            key={index}
            // className={
            //   index === imageIndex
            //     ? styles["carouselCard"] + " " + styles["activeCard"]
            //     : styles["carouselCard"]
            // }
            className={styles.carouselCard}
            onClick={() => setImageIndex(index)}
          >
            <ShengCard
              sheng={item.name}
              translation={item.translation}
              image={item.image}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ShengCarousel;
