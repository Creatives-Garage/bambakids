import React, { useState, useEffect } from "react";
import {motion, useReducedMotion} from "framer-motion"
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./kwame-the-giraffe.module.scss";
import Button from "../../../shared/Button";
import Page1 from "../../../../public/photos/books/KwameTheGiraffe/page1.jpg";
import { kwameTheGiraffe } from "../../../shared/Data/booksData";

const titleVariants: any = {
  in: {
    x: 0,
    transition: {
      duration: 0.9
    }
  },
  center: {
    y: 10,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

const imageVariants: any = {
  in: {
    x: -20,
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
    y: 70,
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

const KwameTheGiraffe = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.coverContainer}>
      <motion.div 
        className={styles.title}
        variants={!shouldReduceMotion ? titleVariants : null}
        initial="in"
        animate={["center"]}
      >
        
      </motion.div>
      <div className={styles.buttonsContainer0}>
        <div className={styles.pageButton0}>
          <Button variant="normal" text="Back to books page" action={()=> router.push("/soma/")}></Button>
        </div>
        <div className={styles.pageButton0}>
          <Button variant="normal" text="Open Page 1" action={()=> router.push("/soma/kwame-the-giraffe/page1")}></Button>
        </div>
      </div>
      <div className={styles.page0ContentContainer}>
        <motion.div 
          className={styles.page0ImageWrapper}
          variants={!shouldReduceMotion ? imageVariants : null}
          initial="in"
          animate={["center"]}
        >
          <Image src={Page1} width={420} height={460} alt="Kwame the giraffe" priority/>
        </motion.div>
        <motion.div 
          className={styles.page0Description}
          variants={!shouldReduceMotion ? descriptionVariants : null}
          initial="in"
          animate={["center"]}          
        >
          {kwameTheGiraffe.pagesData[0].paragraph}
        </motion.div>
      </div>
    </div>
  );
};

export default KwameTheGiraffe;
