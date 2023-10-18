import React from 'react';
import { useRouter } from "next/router";
import styles from "./kwame-the-giraffe.module.scss";
import { kwameTheGiraffe } from '../../../shared/Data/booksData';
import page7Image from "../../../../public/photos/books/KwameTheGiraffe/7.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page7Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/kwame-the-giraffe/page6")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/kwame-the-giraffe/page8")}></Button>
      </div>
      <div className={styles.page7ContentContainer}>
        <div className={styles.page7ImageWrapper}>
          <Image src={page7Image} width={440} height={540} alt="Baba pick up" />
        </div>        
        <p className={styles["page7Description"] + " " + styles["text"]}>
          {kwameTheGiraffe.pagesData[8].paragraph}
        </p>        
      </div>
    </div>
  )
}

export default Page2