import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "./soma.module.scss";
import Nav from "../../shared/Nav";
import SomaBookCard from "../../shared/SomaBookCard";
import Button from "../../shared/Button";
import Footer from "../../../public/icons/footer.svg";
import BabaPickUp from "../../../public/photos/books/BabasPickUp/cover.png";
import Jebet from "../../../public/photos/books/Jebet.png";
import Onyis from "../../../public/photos/books/Mama Onyis.png";

const Soma: NextPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Nav />
      <div className={styles.pageContent}>
        <SomaBookCard link="/soma/babas-pickup" bookName="Babas Pick Up" image={BabaPickUp} />
        <SomaBookCard link="/soma/jebet" bookName="Jebet" image={Jebet} />
        <SomaBookCard link="/soma/onyis" bookName="Mama Onyis" image={Onyis} />
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
