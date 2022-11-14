import React, {PropsWithChildren, useState, ReactNode} from 'react';
import { useRouter, Router } from 'next/router';
import styles from './HeroCard.module.scss';

interface HeroCardProps{
  text: string;
  route: string;
  children?: any;
}

function HeroCard({text, route, children}: HeroCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={()=>router.push(route)} 
      className={styles.heroCardWrapper}
    >
      {children}
      <h2>{text}</h2>       
    </div>
  )
}

export default HeroCard