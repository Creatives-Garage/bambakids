import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./SomaBookCard.module.scss";

interface SomaBookCardProps {
  image: StaticImageData;
  link: string;
  bookName: string;
}

function SomaBookCard({image, link, bookName}: SomaBookCardProps) {
  return (
    <div>
      <Link href={link}>
        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}>
            <Image src={image} width={354} height={500} alt={bookName} />
          </div>
          <div className={styles.cardButton}> Read </div>
        </div>
      </Link>
    </div>
  )
}

export default SomaBookCard;