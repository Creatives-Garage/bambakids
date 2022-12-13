import React from 'react'
import styles from "./CarouselCard.module.scss";
import Image from 'next/image';

interface ShengCardProps {
  sheng?: string,
  translation?: string,
  image: StaticImageData,
}

const CarouselCard = ({sheng, translation, image}: ShengCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <h2>{sheng}</h2>
      <Image src={image} alt={translation} width={280} height={480}/>
      <h3>{translation}</h3>
    </div>
  );
}

export default CarouselCard;