import React from "react";
import styles from "./jifunze.module.scss"

export default function Jifunze(){
    return(
        <div className={styles.pageWrapper}>
          <div className={styles.categoryCards}>
            Let&apos;s Speak Sheng
          </div>
          <div className={styles.categoryCards}>
            Proverbs/Methali
          </div>
          <div className={styles.categoryCards}>
            Did you know?
          </div>
        </div>
    )
}