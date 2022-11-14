import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  active?: boolean;
  variant: string;
  action?: any;
  children?: React.ReactNode;
  icon?: boolean;
  type?: any;
}

const Button = ({ text, active, action, variant, children, type, icon }: ButtonProps) => {
  if (variant == "normal") {
    return (
      <>
        <div
          className={
            active
              ? styles["active"] + " " + styles["buttonWrapper"]
              : styles["buttonWrapper"]
          }
          onClick={action}
        >
          { icon && <div className={styles.iconWrapper}>{children}</div>}
          <div className={styles.btnText}>{text}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button className={styles.search} onClick={() => action} type={type}>
          <div className={styles.iconWrapper}>{children}</div>
          <div className={styles.btnTextSearch}>{text}</div>
        </button>
      </>
    );
  }
};

export default Button;
