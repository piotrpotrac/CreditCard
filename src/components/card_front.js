import React from "react";

import styles from "./card_front.module.css";

const CardFront = (props) => {
  return (
    <div className={styles.front}>
      <svg
        className="styles.svg"
        width="84"
        height="47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>
      <div className={styles.number}>1234 5678 9123 0000</div>
      <div className={styles.container}>
        <div className={styles.username}>Felicia Leire</div>
        <div className={styles.date}>02/25</div>
      </div>
    </div>
  );
};

export default CardFront;
