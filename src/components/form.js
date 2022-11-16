import React, { useState } from "react";
import styles from "./form.module.css";

const Form = (props) => {
  const setCardDataHandler = (event) => {
    event.preventDefault();

    const cardData = {
      cardholder: event.target[0].value,
      number: event.target[1].value,
      month: event.target[2].value,
      year: event.target[3].value,
      cvc: event.target[4].value,
    };
    props.onSubmitForm(cardData);
    console.log(event);
  };

  return (
    <form className={styles.form} onSubmit={setCardDataHandler}>
      <label>Cardholder Name</label>
      <input
        id="cardHolder"
        type="text"
        placeholder="e.g Jane Appleseed"
      ></input>
      {/* <div className={`${styles.com_text}  ${styles.com}`}></div> */}
      <label>Card Number</label>
      <input
        id="number"
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
      ></input>
      {/* <div className={`${styles.com_numb}  ${styles.com}`}>Can't be blank</div> */}
      <div className={styles.form__cnt}>
        <div className={styles.form__cnt__small}>
          <label>EXP. DATE (MM/YY)</label>
          <div className={styles.inputs__months}></div>
          <input
            type="number"
            className={styles.inputs__mon}
            placeholder="MM"
            min={1}
            max={12}
          ></input>
          <input
            type="number"
            className={styles.inputs__mon}
            placeholder="YY"
            min={10}
            max={45}
          ></input>
          {/* <div className={`${styles.com_mon}  ${styles.com}`}>
            Can't be blank
          </div> */}
        </div>
        <div className={styles.form__cnt__small}>
          <label>CVC</label>
          <input
            type="number"
            placeholder="e.g. 123"
            min={100}
            max={999}
          ></input>
          {/* <div className={`${styles.com_cvc}  ${styles.com}`}>
            Can't be blank
          </div> */}
        </div>
      </div>
      <button type="submit" className={styles.button}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
