import React from 'react';
import { useRouter } from "next/router";
import styles from "./kwame-the-giraffe.module.scss";
import { kwameTheGiraffe } from '../../../shared/Data/booksData';
import page8Image from "../../../../public/photos/books/KwameTheGiraffe/8.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/kwame-the-giraffe/page7")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/kwame-the-giraffe/page9")}></Button>
      </div>
      <div className={styles.page8ContentContainer}>
        <div className={styles.page8ImageWrapper}>
          <Image src={page8Image} width={440} height={540} alt="Baba pick up" />
        </div>        
        <p className={styles["page8Description"] + " " + styles["text"]}>
          {kwameTheGiraffe.pagesData[9].paragraph}
        </p>        
      </div>
    </div>
  )
}

export default Page2