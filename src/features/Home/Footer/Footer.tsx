import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footerLeft}>
            <div className={styles.footerTextGroup}>
              <p>Bamba Kids @2022</p>
              <p>A Creatives Garage Production</p>
            </div>
            <Image src="/cgLogo.png" height={72} width={240} alt="Creatives Garage Logo" />
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightText}>
            <p>Connect with us</p>
          </div>
          <div className={styles.socialmedia}>
            <div className={styles.facebook}></div>
            <div className={styles.instagram}></div>
            <div className={styles.twitter}></div>
          </div>
        </div>
    </div>
  )
}

export default Footer;