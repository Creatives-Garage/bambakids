import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Nav from "../../../shared/Nav";
import styles from "./proverbs.module.scss";

const Proverbs: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Nav />
      <div className={styles.pageContent}>
      </div>
    </div>
  );
};

export default Proverbs;
