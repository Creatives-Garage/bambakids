import React, { useState, useEffect } from "react";
import {motion, useReducedMotion} from "framer-motion"
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./babas-pickup.module.scss";
import Button from "../../../shared/Button";
import Page1 from "../../../../public/photos/books/BabasPickUp/page1.jpg";
import { babasPickUp } from "../../../shared/Data/booksData";

const titleVariants: any = {
  in: {
    x: 0,
    transition: {
      duration: 0.9
    }
  },
  center: {
    x: 120,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

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
    y: -50,
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

const BabasPickUp = () => {
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
        {babasPickUp.pagesData[0].pageTitle}
      </motion.div>
      <div className={styles.buttonsContainer0}>
        <div className={styles.pageButton0}>
          <Button variant="normal" text="Open Page 1" action={()=> router.push("/soma/babas-pickup/page1")}></Button>
        </div>
      </div>
      <div className={styles.page0ContentContainer}>
        <motion.div 
          className={styles.page0ImageWrapper}
          variants={!shouldReduceMotion ? imageVariants : null}
          initial="in"
          animate={["center"]}
        >
          <Image src={Page1} width={420} height={460} alt="Baba pick up" />
        </motion.div>
        <motion.div 
          className={styles.page0Description}
          variants={!shouldReduceMotion ? descriptionVariants : null}
          initial="in"
          animate={["center"]}          
        >
          {babasPickUp.pagesData[0].pageDescription}
        </motion.div>
      </div>
    </div>
  );
};

export default BabasPickUp;
