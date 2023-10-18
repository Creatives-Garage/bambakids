import React from 'react';
import { useRouter } from "next/router";
import {motion, useReducedMotion} from "framer-motion"
import styles from "./kwame-the-giraffe.module.scss";
import { kwameTheGiraffe } from '../../../shared/Data/booksData';
import page1Image from "../../../../public/photos/books/KwameTheGiraffe/1.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';

const descriptionVariants: any = {
  in: {
    y: 0,
    transition: {
      duration: 0.9
    }
  },
  center: {
    y: 50,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

const imageVariants: any = {
  in: {
    opacity: 0,
    transition: {
      duration: 0.9
    }
  },
  center: {
    opacity: 1,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

const Page1 = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.page1Container}>
      <div className={styles.page1ContentContainer}>
        <motion.div
          variants={!shouldReduceMotion ? imageVariants : null}
          initial="in"
          animate={["center"]} 
          className={styles.page1ImageWrapper}
        >
          <Image src={page1Image} width={420} height={540} alt="Kwame the Giraffe" priority/>
        </motion.div>
        <motion.div 
          className={styles["page1Description"] + " " + styles["text"]}
          variants={!shouldReduceMotion ? descriptionVariants : null}
          initial="in"
          animate={["center"]}
        >
          {kwameTheGiraffe.pagesData[1].paragraph}
        </motion.div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Books Page" action={()=> router.push("/soma/")}></Button>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/kwame-the-giraffe/")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/kwame-the-giraffe/page2")}></Button>
      </div>
    </div>
  )
}

export default Page1