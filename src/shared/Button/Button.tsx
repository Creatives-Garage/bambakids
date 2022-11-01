import React, { MouseEvent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  active?: boolean;
  variant: string;
  action?: MouseEvent;
  children?: React.ReactNode
}

const Button = ({ text, active, action, variant, children }: ButtonProps) => {
  if (variant == "normal") {
    return (
      <>
        <div
          className={
            active
              ? styles["active"] + " " + styles["buttonWrapper"]
              : styles["buttonWrapper"]
          }
          onClick={() => action}
        >
          <div className={styles.iconWrapper}>{children}</div>
          <div className={styles.btnText}>{text}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.search} onClick={() => action}>
          <div className={styles.iconWrapper}>{children}</div>
          <div className={styles.btnTextSearch}>{text}</div>
        </div>
      </>
    );
  }
};

export default Button;
