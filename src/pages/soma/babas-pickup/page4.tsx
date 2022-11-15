import React from 'react';
import { useRouter } from "next/router";
import styles from "./babas-pickup.module.scss";
import { babasPickUp } from '../../../shared/Data/booksData';
import page5Image from "../../../../public/photos/books/BabasPickUp/6.jpeg";
import Image from 'next/image';

const Page2 = () => {
  const router = useRouter();

  return (
    <div className={styles.page2Container}>
      <div className={styles.buttonsContainer}>
        <button onClick={()=> router.push("/soma/babas-pickup/page1")} className={styles.pageButton}>Previous Page</button>
        <button onClick={()=> router.push("/soma/babas-pickup/page3")} className={styles.pageButton}>Next Page</button>
      </div>
      <div className={styles.page5ContentContainer}>
        <p className={styles["page2Description"] + " " + styles["text"]}>
          {babasPickUp.pagesData[5].pageDescription}
        </p>
        <div className={styles.page2ImageWrapper}>
          <Image src={page5Image} width={440} height={540} alt="Baba pick up" />
        </div>
      </div>
    </div>
  )
}

export default Page2