import styles from './SuccesInfo.module.css'

const SuccesInfo = ({ setIsSubmited }) => {
  return (
    <div className={`${styles.form} ${styles.complete}`}>
      <svg
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE" />
            <stop offset="1" stopColor="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <button className={styles.button} onClick={() => setIsSubmited(false)}>
        Continue
      </button>
    </div>
  )
}

export default SuccesInfo
