import React from 'react'

import styles from './CardBack.module.css'

const CardBack = ({ cvc }) => {
  return (
    <div className={styles.back}>
      <div className={styles.cvc}>{cvc}</div>
    </div>
  )
}

export default CardBack
