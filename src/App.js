import styles from "./App.module.css";
import CardFront from "./components/card_front";
import CardBack from "./components/card_back";
import Form from "./components/form";
import { useState } from "react";

function App() {
  let cardData = {
    cardholder: "Jane Appleseed",
    number: "1234 5678 9110 0000",
    month: "02",
    year: "23",
    cvc: "654",
  };
  let setCardData;
  [cardData, setCardData] = useState(cardData);

  const changeDataHandler = (data) => {
    setCardData(data);
  };

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
      <div className={styles.form}>
        <Form onSubmitForm={changeDataHandler}></Form>
      </div>
    </div>
  );
}

export default App;
