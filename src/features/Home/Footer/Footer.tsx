import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.horizontal}></div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <Image
            src="/cgLogo.png"
            height={64}
            width={200}
            alt="Creatives Garage Logo"
          />
          <div className={styles.socialmedia}>
            <div className={styles.facebook}></div>
            <div className={styles.instagram}></div>
            <div className={styles.twitter}></div>
          </div>
        </div>
        <div className={styles.footerTextGroup}>
          <p>© 2022 Bamba Kids</p>
          <p style={{marginRight: "8px", marginLeft: "8px"}}> | </p> 
          <p>A Creatives Garage Production</p>
          <p style={{marginRight: "8px", marginLeft: "8px"}}> | </p>
          <Link href="/privacy"><p className={styles.footerLink}>Privacy policy</p></Link>
        </div>
      </div>
      <div className={styles.horizontal}></div>
    </div>
  );
}

export default Footer;
