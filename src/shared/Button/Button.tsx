import React, { MouseEvent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  active?: boolean;
  variant: string;
  action?: MouseEvent;
}

const Button = ({ text, active, action, variant }: ButtonProps) => {
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
          {text}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.search} onClick={() => action}>
          {text}
        </div>
      </>
    );
  }
};

export default Button;
