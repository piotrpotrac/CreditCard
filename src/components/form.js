import React from "react";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <form className={styles.form}>
      <label>Cardholder Name</label>
      <input type="text" placeholder="e.g Jane Appleseed"></input>
      <div className={`${styles.com_text}  ${styles.com}`}></div>
      <label>Card Number</label>
      <input type="number" placeholder="e.g. 1234 5678 9123 0000"></input>
      <div className={`${styles.com_numb}  ${styles.com}`}>Can't be blank</div>
      <div className={styles.form__cnt}>
        <div className={styles.form__cnt__small}>
          <label>EXP. DATE (MM/YY)</label>
          <div className={styles.inputs__months}></div>
          <input
            type="number"
            className={styles.inputs__mon}
            placeholder="MM"
          ></input>
          <input
            type="number"
            className={styles.inputs__mon}
            placeholder="YY"
          ></input>
          <div className={`${styles.com_mon}  ${styles.com}`}>
            Can't be blank
          </div>
        </div>
        <div className={styles.form__cnt__small}>
          <label>CVC</label>
          <input type="number" placeholder="e.g. 123"></input>
          <div className={`${styles.com_cvc}  ${styles.com}`}>
            Can't be blank
          </div>
        </div>
      </div>
      <button type="submit" className={styles.button}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
