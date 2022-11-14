import React from 'react';
import styles from "./TabButton.module.scss";

type Props = {
    title: string,
  };

const TabButton: React.FC<Props> = ({title}) => {
  return (
    <button className={styles.tabButton}>
        {title}       
    </button>
  )
}

export default TabButton