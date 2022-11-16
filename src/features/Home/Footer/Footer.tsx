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
            <a href="https://www.facebook.com/Creatives.Garage/"><div className={styles.facebook}></div></a>
            <a href="https://www.instagram.com/creativesgarage/?hl=en"><div className={styles.instagram}></div></a>
            <a href="https://twitter.com/cr8vesgarage?lang=en"><div className={styles.twitter}></div></a>
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
