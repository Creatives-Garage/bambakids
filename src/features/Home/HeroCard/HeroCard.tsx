import React, {PropsWithChildren, useState, ReactNode} from 'react';
import { motion } from "framer-motion"
import { useRouter, Router } from 'next/router';
import styles from './HeroCard.module.scss';

const titleVariants: any = {
  in: {
    y: 10,
    opacity: 0.9,
    transition: {
      duration: 0.9
    }
  },
  center: {
    y: 0,
    opacity: 1,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};
interface HeroCardProps{
  text: string;
  route: string;
  children?: any;
}

function HeroCard({text, route, children}: HeroCardProps) {
  const router = useRouter();

  return (
    <motion.div
      variants={titleVariants}
      initial="in"
      animate={["center"]}
      onClick={()=>router.push(route)} 
      className={styles.heroCardWrapper}
    >
      {children}
      <h2>{text}</h2>       
    </motion.div>
  )
}

export default HeroCard