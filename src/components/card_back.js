import React from "react";

import styles from "./card_back.module.css";

const CardBack = (props) => {
  return (
    <div className={styles.back}>
      <div className={styles.cvc}>{props.cvc}</div>
    </div>
  );
};

export default CardBack;
