import React from 'react';
import { useRouter } from "next/router";
import styles from "./babas-pickup.module.scss";
import { babasPickUp } from '../../../shared/Data/booksData';
import page6Image from "../../../../public/photos/books/BabasPickUp/7.jpeg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/babas-pickup/page4")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/babas-pickup/page6")}></Button>
      </div>
      <div className={styles.page5ContentContainer}>
        <div className={styles.page5ImageWrapper}>
          <Image src={page6Image} width={440} height={540} alt="Baba pick up" />
        </div>        
        <p className={styles["page2Description"] + " " + styles["text"]}>
          {babasPickUp.pagesData[5].pageDescription}
        </p>        
      </div>
    </div>
  )
}

export default Page2