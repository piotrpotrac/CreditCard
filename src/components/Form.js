import { useState, useReducer } from 'react'
import SuccesInfo from './SuccesInfo'

import styles from './Form.module.css'

const errorMsgs = {
  cardholder: 'Get Your full name.',
  number: 'Wrong format, number only! (16 characters)',
  month: 'Month between 1-12.',
  year: 'Incorect year.',
  cvc: 'Number only 3 characters.',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.payload.id]: action.payload.value }
    default:
      return state
  }
}

const Form = ({ onSubmitForm }) => {
  const [isSubmited, setIsSubmited] = useState(false)
  const [state, dispatch] = useReducer(reducer)

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { id: e.target.id, value: e.target.value },
    })
  }

  const setCardDataHandler = (event) => {
    event.preventDefault()
    setIsSubmited(true)
    onSubmitForm(state)
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
            pattern="^[A-Za-z0-9]{2,16}\s+[A-Za-z0-9]{2,16}$"
            required="required"
            onChange={handleChange}
          ></input>
          <div className={styles.error}>{errorMsgs.cardholder}</div>
          <label>Card Number</label>
          <input
            id="number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            pattern="^[0-9]{16}$"
            required="required"
            onChange={handleChange}
          ></input>
          <div className={styles.error}>{errorMsgs.number}</div>
          <div className={styles.form__cnt}>
            <div className={styles.form__cnt__small}>
              <label>EXP. DATE (MM/YY)</label>
              <div className={styles.inputs__months}></div>
              <input
                id="month"
                type="number"
                className={styles.inputs__mon}
                placeholder="MM"
                min={1}
                max={12}
                required="required"
                onChange={handleChange}
              ></input>
              <div className={styles.error}>{errorMsgs.month}</div>
              <input
                id="year"
                type="number"
                className={styles.inputs__mon}
                placeholder="YY"
                min={10}
                max={45}
                required="required"
                onChange={handleChange}
              ></input>
              <div className={styles.error}>{errorMsgs.year}</div>
            </div>
            <div className={styles.form__cnt__small}>
              <label>CVC</label>
              <input
                id="cvc"
                type="number"
                placeholder="e.g. 123"
                min={100}
                max={999}
                required="required"
                onChange={handleChange}
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
