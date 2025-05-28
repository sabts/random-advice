import { useEffect, useState } from "react";
import styles from "./randomadvice.module.css"

const RandomAdvice = () => {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    getAdvice(setAdvice);
  }, []);
  return (

<section className={styles["container"]}>
      {advice?.slip && (
           <div>
           <h2 key={advice.slip.id} className={styles["advice-number"]}>Advice #{advice.slip.id}</h2>
           <span className={styles["advice-text"]}>"{advice.slip.advice}"</span>
           </div>
      )}

      <button onClick={() => getAdvice(setAdvice)} className={styles["button"]}>
        <img src="public/assets/icon-dice.svg"/>
      </button>
      </section>
   );
};

const getAdvice = async setAdvice => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
   // console.log(advice);
    setAdvice(advice);
  } catch (error) {
    console.error("chao no hay nada");
  }
};

export default RandomAdvice;
