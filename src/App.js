import { useState } from 'react'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import Form from './components/Form'

import styles from './App.module.css'

const cardDataExample = {
  cardHolder: 'Jane Appleseed',
  number: '1234567891100000',
  month: '2',
  year: '23',
  cvc: '654',
}

function App() {
  const [cardData, setCardData] = useState(cardDataExample)

  const changeDataHandler = (data) => {
    setCardData(data)
  }

  return (
    <div className={styles.app}>
      <div className={styles.container__cards}>
        <CardFront cardData={cardData} />
        <CardBack cvc={cardData.cvc} />
      </div>
      <Form onSubmitForm={changeDataHandler} />
    </div>
  )
}

export default App
