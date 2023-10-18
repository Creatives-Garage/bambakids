import React from 'react';
import { useRouter } from "next/router";
import styles from "./ayanna-the-makanga.module.scss";
import { ayannaTheMakanga } from '../../../shared/Data/booksData';
import page2Image from "../../../../public/photos/books/AyannaTheMakanga/2.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

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

const descriptionVariants: any = {
  in: {
    y: 50,
    transition: {
      duration: 0.9
    }
  },

  center: {
    y: 0,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

const Page2 = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Books Page" action={()=> router.push("/soma/")}></Button>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/ayanna-the-makanga/page1")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/ayanna-the-makanga/page3")}></Button>
      </div>
      <div className={styles.page2ContentContainer}>
        <motion.div
          variants={!shouldReduceMotion ? imageVariants : null}
          initial="in"
          animate={["center"]} 
          className={styles.page2ImageWrapper}
        >
          <Image src={page2Image} width={420} height={540} alt="Ayanna the Makanga" priority/>
        </motion.div>
        <motion.div
          variants={!shouldReduceMotion ? descriptionVariants : null}
          initial="in"
          animate={["center"]}
          className={styles["page2Description"] + " " + styles["text"]}
        >
          {ayannaTheMakanga.pagesData[2].paragraph}
        </motion.div>
      </div>
    </div>
  )
}

export default Page2