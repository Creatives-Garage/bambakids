import React from 'react';
import { useRouter } from "next/router";
import styles from "./ayanna-the-makanga.module.scss";
import { ayannaTheMakanga } from '../../../shared/Data/booksData';
import page4Image from "../../../../public/photos/books/AyannaTheMakanga/4.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/ayanna-the-makanga/page3")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/ayanna-the-makanga/page5")}></Button>
      </div>
      <div className={styles.page5ContentContainer}>
        <p className={styles["page2Description"] + " " + styles["text"]}>
          {ayannaTheMakanga.pagesData[5].paragraph}
        </p>
        <div className={styles.page2ImageWrapper}>
          <Image src={page4Image} width={440} height={540} alt="Ayanna the Makanga" />
        </div>
      </div>
    </div>
  )
}

export default Page2