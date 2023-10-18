import React from 'react';
import { useRouter } from "next/router";
import styles from "./kwame-the-giraffe.module.scss";
import { kwameTheGiraffe } from '../../../shared/Data/booksData';
import page5Image from "../../../../public/photos/books/KwameTheGiraffe/5.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/kwame-the-giraffe/page4")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/kwame-the-giraffe/page6")}></Button>
      </div>
      <div className={styles.page5ContentContainer}>
        <div className={styles.page5ImageWrapper}>
          <Image src={page5Image} width={440} height={540} alt="Kwame the giraffe" />
        </div>        
        <p className={styles["page5Description"] + " " + styles["text"]}>
          {kwameTheGiraffe.pagesData[6].paragraph}
        </p>        
      </div>
    </div>
  )
}

export default Page2