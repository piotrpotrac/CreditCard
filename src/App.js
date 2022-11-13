import styles from "./App.module.css";
import CardFront from "./components/card_front";
import CardBack from "./components/card_back";
import Form from "./components/form";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container__cards}>
        <div className={styles.front}>
          <CardFront />
        </div>
        <div className={styles.back}>
          <CardBack />
        </div>
      </div>
      <div className={styles.form}>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
