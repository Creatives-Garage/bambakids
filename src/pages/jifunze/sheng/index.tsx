import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Nav from "../../../shared/Nav";
import { motion } from "framer-motion";
import styles from "./sheng.module.scss";
import ShengCarousel from "../../../features/Sheng/ShengCarousel";
import { shengData } from "../../../shared/Data/shengData";
import path from 'path';
import fs from 'fs/promises';

const imageVariants: any = {
  in: {
    x: -100,
    transition: {
      duration: 0.9
    }
  },
  center: {
    x: 0,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

const Sheng: NextPage = ({videos}: any) => {
  const payload = videos?.videos;
  const router = useRouter()
  return (
    <div className={styles.page}>
      <Nav payload={payload}/>
      <div className={styles.pageContent}>
        <div className={styles.navigationHeader}>
          <button className={styles.backbutton} onClick={()=> router.push("/jifunze/")}> Back </button>
          <div className={styles.contentTitle}>
            <motion.h2
              variants={imageVariants}
              initial="in"
              animate={["center"]}
            >Learn Sheng&apos;</motion.h2>
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

async function getData() {
  const filePath = path.join(process.cwd(), 'src', 'shared', 'Data', 'tazamaData.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getServerSideProps(context: any) {
  const payload = await getData();
  return {
    props: {
      videos: payload,
    },
  };
}
