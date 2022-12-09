import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Nav from "../../../shared/Nav";
import styles from "./sheng.module.scss";
import ShengCarousel from "../../../features/Sheng/ShengCarousel";
import { shengData } from "../../../shared/Data/shengData";

const Sheng: NextPage = () => {
  const router = useRouter()
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.pageContent}>
        <div className={styles.navigationHeader}>
          <button className={styles.backbutton} onClick={()=> router.push("/jifunze/")}> Back </button>
          <div className={styles.contentTitle}>
            <h2>Learn Sheng&apos;</h2>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <ShengCarousel data={shengData} />          
        </div>
      </div>
    </div>
  );
};

export default Sheng;
