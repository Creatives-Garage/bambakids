import React from 'react';
import { useRouter } from "next/router";
import styles from "./jebet-the-runner.module.scss";
import { jebetTheRunner } from '../../../shared/Data/booksData';
import page5Image from "../../../../public/photos/books/JebetTheRunner/7.jpg";
import Image from 'next/image';
import Button from '../../../shared/Button';
import {motion, useReducedMotion} from "framer-motion"

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <Button variant="normal" text="Previous Page" action={()=> router.push("/soma/jebet-the-runner/page3")}></Button>
        <Button variant="normal" text="Next Page" action={()=> router.push("/soma/jebet-the-runner/page5")}></Button>
      </div>
      <div className={styles.page5ContentContainer}>
        <p className={styles["page2Description"] + " " + styles["text"]}>
          {jebetTheRunner.pagesData[5].paragraph}
        </p>
        <div className={styles.page2ImageWrapper}>
          <Image src={page5Image} width={440} height={540} alt="Jebet the runner" />
        </div>
      </div>
    </div>
  )
}

export default Page2