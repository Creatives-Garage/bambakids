import React from "react";
import Image from "next/image";
import styles from "./Nav.module.scss";
import Button from "../Button";

function Nav() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navItems}>
        <Button text="Home" variant="normal" />
        <Button text="About us" variant="normal" />

        <div className={styles.navItemsCenter}>
          <Image alt="logo" src="/logo.png" width={80} height={80} />
        </div>

        <Button text="Download" variant="normal" />
        <Button text="Search" variant="search" />
      </div>
    </div>
  );
}

export default Nav;
