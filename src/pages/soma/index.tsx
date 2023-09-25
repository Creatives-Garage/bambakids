import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "./soma.module.scss";
import Nav from "../../shared/Nav";
import SomaBookCard from "../../shared/SomaBookCard";
import Button from "../../shared/Button";
import Footer from "../../../public/icons/footerTazama.svg";
import BabaPickUp from "../../../public/photos/books/BabasPickUp/cover.png";
import Jebet from "../../../public/photos/books/JebetTheRunner/Cover.png";
import Onyis from "../../../public/photos/books/Mama Onyis.png";
import Kwame from "../../../public/photos/books/KwameTheGiraffe/cover.jpg"
import Ayanna from "../../../public/photos/books/AyannaTheMakanga/cover.jpg"

const Soma: NextPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Nav />   
      <div className={styles.pageContent}>
        <SomaBookCard link="/soma/babas-pickup" bookName="Babas Pick Up" image={BabaPickUp} />
        <SomaBookCard link="/soma/jebet-the-runner" bookName="Jebet - The Runner" image={Jebet} />
        <SomaBookCard link="/soma/kwame-the-giraffe" bookName="Kwame - The Giraffe" image={Kwame} />
        <SomaBookCard link="/soma/ayanna-the-makanga" bookName="Ayanna - The Makanga" image={Ayanna} />
      </div>
      {/* <div className={styles.loadMoreWrapper}>
        <Button variant="normal" text="LOAD MORE..." icon={false}></Button>
      </div> */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Soma
