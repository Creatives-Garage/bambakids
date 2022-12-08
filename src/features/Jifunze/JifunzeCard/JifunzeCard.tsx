import React, {PropsWithChildren, useState, ReactNode} from 'react';
import { useRouter, Router } from 'next/router';
import styles from './JifunzeCard.module.scss';

interface HeroCardProps{
  description: string;
  title: string;
  route: string;
}

function JifunzeCard ({title, description, route}: HeroCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={()=>router.push(route)} 
      className={styles.categoryCards}
    >
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>       
    </div>
  )
}

export default JifunzeCard;