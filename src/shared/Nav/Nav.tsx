import React from "react";
import Image from "next/image";
import styles from "./Nav.module.scss";
import Button from "../Button";

function Nav() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navItems}>
        <div className={styles.navItemsLeft}>
          <Button text="Home" variant="normal">
            <Image src="/icons/home.svg" alt="home" width={32} height={32}/>            
          </Button>
          <Button text="About us" variant="normal">
            <Image src="/icons/information.svg" alt="information" width={32} height={32}/>
          </Button>
        </div>

        <div className={styles.navItemsCenter}>
          <Image alt="logo" src="/logo.png" width={80} height={80} />
        </div>

        <div className={styles.navItemsRight}>
          <Button text="Download" variant="normal">
            <Image src="/icons/download.svg" alt="information" width={32} height={32}/>
          </Button>
          <Button text="Search" variant="search">
            <Image src="/icons/search.svg" alt="information" width={32} height={32}/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
