import React from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import styles from "./videoCard.module.scss";
import Image from "next/image";
import Link from "next/link";


const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};

interface videoCardProps{
  title: string;
  image: string;
  link: string;
  active?: boolean;
}

function VideoCard({ title, image, link, active }: videoCardProps)  {
  const [playClickSound] = useSound(clickSound.default);

  return (
    <Link href={link}>
      <motion.div 
        className={styles.videoWrapper}
        variants = {cardVariant}
      >
        <div className={styles.thumbnail}>
          <Image src={image} width={200} height={200} alt={title} />
        </div>
        <div className={styles.descriptionBox}>{title}</div>
        <div className={styles.playIconWrapper}>
          <div className={styles.playIcon}>
            <Image src="/icons/play.png" width={40} height={40} alt="play" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default VideoCard;
