import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Button from '../../../shared/Button';
import styles from './AppDownload.module.scss';

const AppDownload = () => {
  return (
    <div className={styles.sectionWrapper} id="download">
        <div className={styles.phoneSection}>
          <div className={styles.phones}>
            <div className={styles.phone1}>
              <Image src="/phone1.png" width={230} height={400} alt=""/>
            </div>
            <div className={styles.phone2}>
              <Image src="/phone2.png" width={230} height={400} alt=""/>
            </div>
          </div>
          <div className={styles.svgIcons}></div>
        </div>
        <div className={styles.downloadDescription}>
          <div className={styles.downloadText}>
            <h3>BAMBA KIDS IS ON MOBILE TOO</h3>
            <p>Download the Bamba Kids app <br/>for cool and exciting features such as games <br/>that help your child learn and expand their knowledge in a variety of areas. </p>
          </div>
          <a style={{textDecoration: "none"}} href="https://play.google.com/store/apps/details?id=com.creativesgarage.bambakidz&hl=en&gl=US">
            <Button variant="normal" text='Download from Playstore' icon>
              <Image src="/icons/playstore.svg" width={80} height={72} alt=""/>
            </Button>
          </a>          
        </div>
    </div>
  )
}

export default AppDownload