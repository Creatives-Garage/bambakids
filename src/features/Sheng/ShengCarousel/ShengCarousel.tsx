import React, { useState } from "react";
import Button from "../../../shared/Button";
import Slider from "react-slick";
import ShengCard from "../ShengCard";
import styles from "./ShengCarousel.module.scss";
import { typeShengData, shengDataType } from "../../../shared/Data/shengData";

const ShengCarousel = ({ data }: any) => {
  const [imageIndex, setImageIndex] = useState(0);

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
      {/* <Slider {...settings}> */}
      <div className={styles.buttonContainer}>
        <Button
          variant="normal"
          text="Previous"
          action={() =>
            imageIndex >= 1 ? setImageIndex(imageIndex - 1) : setImageIndex(2)
          }
        />
        <Button
          variant="normal"
          text="Next"
          action={() =>
            imageIndex <= 1 ? setImageIndex(imageIndex + 1) : setImageIndex(0)
          }
        />
      </div>
      <div className={styles.cardsWrapper}>
        {data?.map((item: shengDataType, index: number) => (
          <div
            key={index}
            className={
              index === imageIndex
                ? styles["carouselCard"] + " " + styles["activeCard"]
                : styles["carouselCard"]
            }
            onClick={() => setImageIndex(index)}
          >
            <ShengCard
              sheng={item.name}
              translation={item.translation}
              image={item.image}
            />
          </div>
        ))}
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default ShengCarousel;
