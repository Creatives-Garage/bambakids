import React from "react";
import styles from "./privacy.module.scss";
import Nav from "../../shared/Nav";

const Privacy = () => {
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.NavWrapper}>
        <Nav />
      </div>
      <div className={styles.pageContent}>
        <h1> About </h1>
        <p> Play. Watch. Learn</p>
        <p> Bamba Kids is an interactive edutainment app created for kids aged 3-10 years old. On it. children can learn facts about the world around them, watch and read entertaining stories and play games!</p>
      </div>
    </div>
  );
};

export default Privacy;
