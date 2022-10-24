import React, { MouseEvent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  active: boolean;
  action?: MouseEvent
}

const Button = ({ text, active, action}: ButtonProps) => {
  return (
    <div 
      className={active ? styles['active'] + ' ' + styles['buttonWrapper'] : styles['buttonWrapper']}
      onClick={() => action}>
      <em>{text}</em>
    </div>
  );
};

export default Button;
