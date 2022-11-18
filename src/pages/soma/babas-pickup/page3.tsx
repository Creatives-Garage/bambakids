import React from "react";
import { useRouter } from "next/router";
import styles from "./babas-pickup.module.scss";
import { babasPickUp } from "../../../shared/Data/booksData";
import page3Image from "../../../../public/photos/books/BabasPickUp/3.jpeg";
import page4Image from "../../../../public/photos/books/BabasPickUp/4.jpeg";
import Image from "next/image";
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const imageVariants: any = {
  inRight: {
    x: -100,
    transition: {
      duration: 0.9
    }
  },
  inLeft: {
    x: 100,
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
  inRight: {
    y: 50,
    transition: {
      duration: 0.9
    }
  },

  inLeft: {
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
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/babas-pickup/page2")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/babas-pickup/page4")}></Button>
      </div>
      <div className={styles.sections}>
        <div className={styles.sectionLeft}>
          <div className={styles.page3ContentContainer}>
            <motion.div 
              variants={!shouldReduceMotion ? imageVariants : null}
              initial="in"
              animate={["center"]}
              className={styles.page3ImageWrapperLeft}
            >
              <Image
                src={page3Image}
                width={320}
                height={400}
                alt="Baba pick up" 
                placeholder="blur"
                priority
              />
            </motion.div>
            <p className={styles["page3Description"] + " " + styles["text"]}>
              { babasPickUp.pagesData[3].pageDescription }
            </p>
          </div>
        </div>
        <div className={styles.sectionRight}>
          <div className={styles.page3ContentContainerRight}>
            <div className={styles.page3ImageWrapperRight}>
              <Image
                src={page4Image}
                width={360}
                height={480}
                alt="Baba pick up"
                priority
              />
            </div>
            <p className={styles["page3DescriptionRight"] + " " + styles["text"]}>
              { babasPickUp.pagesData[3].pageDescription2 }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
