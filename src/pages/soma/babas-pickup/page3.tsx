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

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => router.push("/soma/babas-pickup/page2")}
          className={styles.pageButton}
        >
          Previous Page
        </button>
        <button
          onClick={() => router.push("/soma/babas-pickup/page4")}
          className={styles.pageButton}
        >
          Next Page
        </button>
      </div>
      <div className={styles.sections}>
        <div className={styles.sectionLeft}>
          <div className={styles.page3ContentContainer}>
            <div className={styles.page3ImageWrapperLeft}>
              <Image
                src={page3Image}
                width={320}
                height={400}
                alt="Baba pick up"
              />
            </div>
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
              />
            </div>
            <p className={styles["page3DescriptionRight"] + " " + styles["text"]}>
              { babasPickUp.pagesData[4].pageDescription }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
