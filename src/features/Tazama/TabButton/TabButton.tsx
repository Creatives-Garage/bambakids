import React from 'react';
import styles from "./TabButton.module.scss";
import { playClickSound } from '../../../shared/utils/soundClickEvents';

type Props = {
    title: string,
  };

const TabButton: React.FC<Props> = ({title}) => {
  return (
    <button className={styles.tabButton} onClick={()=> playClickSound()}>
        {title}       
    </button>
  )
}

export default TabButton