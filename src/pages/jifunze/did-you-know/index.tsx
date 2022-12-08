import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Nav from "../../../shared/Nav";
import styles from "./did-you-know.module.scss";

const Sheng: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Nav />
      <div className={styles.pageContent}>
      </div>
    </div>
  );
};

export default Sheng;
