import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Nav from "../../../shared/Nav";
import { motion } from "framer-motion";
import styles from "./proverbs.module.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import { proverbsData } from "../../../shared/Data/proverbsData";
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

const Proverbs: NextPage = ({videos}: any) => {
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
            >Learn Proverbs</motion.h2>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel data={proverbsData} />          
        </div>
      </div>
    </div>
  );
};

export default Proverbs;

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
