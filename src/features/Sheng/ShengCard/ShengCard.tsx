import React from 'react'
import styles from "./ShengCard.module.scss";
import Image from 'next/image';

interface ShengCardProps {
  sheng: string,
  translation: string,
  image: StaticImageData,
}

const ShengCard = ({sheng, translation, image}: ShengCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <h2>{sheng}</h2>
      <Image src={image} alt={translation} width={242} height={272}/>
      <h3>{translation}</h3>
    </div>
  );
}

export default ShengCard;