import React, { useRef, useState } from 'react'
import styles from './Form.module.css'
import SuccesInfo from './SuccesInfo'

const errorMsgs = {
  cardholder: 'Get Your full name.',
  number: 'Wrong format, number only! (16 characters)',
  month: 'Month between 1-12.',
  year: 'Incorect year.',
  cvc: 'Number only 3 characters.',
}

const Form = (props) => {
  const cardholderRef = useRef()
  const numberRef = useRef()
  const monthRef = useRef()
  const yearRef = useRef()
  const cvcRef = useRef()

  const [isSubmited, setIsSubmited] = useState(false)

  const setCardDataHandler = (event) => {
    event.preventDefault()
    setIsSubmited(true)

    const cardData = {
      cardholder: cardholderRef.current.value,
      number: numberRef.current.value,
      month: monthRef.current.value,
      year: yearRef.current.value,
      cvc: cvcRef.current.value,
    }

    props.onSubmitForm(cardData)
  }

  return (
    <>
      {isSubmited && <SuccesInfo setIsSubmited={setIsSubmited} />}
      {!isSubmited && (
        <form className={styles.form} onSubmit={setCardDataHandler}>
          <label>Cardholder Name</label>
          <input
            id="cardHolder"
            type="text"
            placeholder="e.g Jane Appleseed"
            ref={cardholderRef}
            pattern="^[A-Za-z0-9]{2,16}\s+[A-Za-z0-9]{2,16}$"
            required="required"
          ></input>
          <div className={styles.error}>{errorMsgs.cardholder}</div>
          <label>Card Number</label>
          <input
            id="number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            ref={numberRef}
            pattern="^[0-9]{16}$"
            required="required"
          ></input>
          <div className={styles.error}>{errorMsgs.number}</div>
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
                ref={monthRef}
                required="required"
              ></input>
              <div className={styles.error}>{errorMsgs.month}</div>
              <input
                type="number"
                className={styles.inputs__mon}
                placeholder="YY"
                min={10}
                max={45}
                ref={yearRef}
                required="required"
              ></input>
              <div className={styles.error}>{errorMsgs.year}</div>
            </div>
            <div className={styles.form__cnt__small}>
              <label>CVC</label>
              <input
                type="number"
                placeholder="e.g. 123"
                min={100}
                max={999}
                ref={cvcRef}
                required="required"
              ></input>
              <div className={styles.error}>{errorMsgs.cvc}</div>
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Confirm
          </button>
        </form>
      )}
    </>
  )
}

export default Form
