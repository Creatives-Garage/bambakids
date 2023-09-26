import React, { useState, useEffect } from "react";
import {motion, useReducedMotion} from "framer-motion"
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./babas-pickup.module.scss";
import Button from "../../shared/Button";
// TODO remove this backup image when actually properly filling the data
import Page1 from "../../../public/photos/books/BabasPickUp/page1.jpg";
import {  BookData } from "../../shared/Data/booksData";
import { removeAfterLastSlash } from "../../shared/Utils/helperFunctions";

const titleVariants: any = {
  in: {
    x: 0,
    transition: {
      duration: 0.9
    }
  },
  center: {
    y: 10,
    transformOrigin: 'top',
    transition: {
      duration: 0.9
    }
  },
};

const imageVariants: any = {
  in: {
    x: -20,
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
  

const BookViewer = ({bookData, pageIndex }: {bookData: BookData, pageIndex: number}) => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const isOnCoverPage = pageIndex === -1;

  const handlePreviousPageClick = () => {
    console.log(pageIndex)
    if(pageIndex >= -1){
      pushToNewPageIndex(pageIndex - 1)
    }
  }


  const handleNextPageClick = () => {
    if(pageIndex < bookData.pagesData.length - 1){
      pushToNewPageIndex(pageIndex + 1)
    }
  }

  const pushToNewPageIndex = (newPageIndex: number) => {
    router.push(removeAfterLastSlash(router.asPath) + '/' + newPageIndex)
    
  }


    // TODO merge duplicate code into one for the ? : operator
  return (
    isOnCoverPage ? (
    <div className={styles.coverContainer}>
      <motion.div 
        className={styles.title}
        variants={!shouldReduceMotion ? titleVariants : null}
        initial="in"
        animate={["center"]}
      >
        {bookData.bookName}
      </motion.div>
      <div className={styles.buttonsContainer0}>
        <div className={styles.pageButton0}>
          <Button variant="normal" text="Back to books page" action={()=> router.push("/soma/")}></Button>
        </div>
        <div className={styles.pageButton0}>
          <Button variant="normal" text="Open Page 1" action={()=> handleNextPageClick()}></Button>
        </div>
      </div>
      <div className={styles.page0ContentContainer}>
        <motion.div 
          className={styles.page0ImageWrapper}
          variants={!shouldReduceMotion ? imageVariants : null}
          initial="in"
          animate={["center"]}
        >
          <Image src={bookData.bookCover} width={420} height={460} priority/>
        </motion.div>
        <motion.div 
          className={styles.page0Description}
          variants={!shouldReduceMotion ? descriptionVariants : null}
          initial="in"
          animate={["center"]}          
        >
          {bookData.backMatter}
        </motion.div>
      </div>
    </div>
    ) : (
        <div className={styles.page1Container}>
        <div className={styles.page1ContentContainer}>
          <motion.div
            variants={!shouldReduceMotion ? imageVariants : null}
            initial="in"
            animate={["center"]} 
            className={styles.page1ImageWrapper}
          >
            <Image src={bookData.pagesData[pageIndex].pageImage ?? Page1} width={420} height={540} priority/>
          </motion.div>
          <motion.div 
            className={styles["page1Description"] + " " + styles["text"]}
            variants={!shouldReduceMotion ? descriptionVariants : null}
            initial="in"
            animate={["center"]}
          >
            {
            bookData.pagesData[pageIndex].text
        }
          </motion.div>
        </div>
        <div className={styles.buttonsContainer}>
          <Button variant="normal" text="Books Page" action={()=> router.push("/soma/")}></Button>
          <Button variant="normal" text="Previous Page" action={()=> handlePreviousPageClick()}></Button>
          {(pageIndex !== bookData.pagesData.length - 1) && <Button variant="normal" text="Next Page" action={()=> handleNextPageClick()}></Button>}
        </div>
      </div>
    )

  );
};

export default BookViewer;
