import React from "react";

import styles from "./card_back.module.css";

const CardBack = (props) => {
  return (
    <div className={styles.back}>
      <div className={styles.cvc}>657</div>
    </div>
  );
};

export default CardBack;
