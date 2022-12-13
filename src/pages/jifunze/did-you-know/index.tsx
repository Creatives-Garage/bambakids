import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Nav from "../../../shared/Nav";
import { motion } from "framer-motion";
import styles from "./did-you-know.module.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import { didYouKnowData } from "../../../shared/Data/didYouKnow";
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

const DidYouKnow: NextPage = ({videos}: any) => {
  const payload = videos?.videos;
  const router = useRouter();

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
            >Did You Know...?</motion.h2>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel data={didYouKnowData} />          
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;

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
