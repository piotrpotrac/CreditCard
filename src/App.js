import styles from './App.module.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  let cardData = {
    cardholder: 'Jane Appleseed',
    number: '1234567891100000',
    month: '2',
    year: '23',
    cvc: '654',
  }

  let setCardData
  ;[cardData, setCardData] = useState(cardData)

  const changeDataHandler = (data) => {
    setCardData(data)
  }

  return (
    <div className={styles.app}>
      <div className={styles.container__cards}>
        <div className={styles.front}>
          <CardFront cardData={cardData} />
        </div>
        <div className={styles.back}>
          <CardBack cvc={cardData.cvc} />
        </div>
      </div>

      <Form onSubmitForm={changeDataHandler}></Form>
    </div>
  )
}

export default App
