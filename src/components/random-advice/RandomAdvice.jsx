import { useEffect, useState } from "react";
import styles from "./randomadvice.module.css"

const RandomAdvice = () => {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    getAdvice(setAdvice);
  }, []);
  return (
    <>

      {advice?.slip && (
           <div className={styles["container"]}>
           <h2 key={advice.slip.id}>{advice.slip.id}</h2>
           <span>"{advice.slip.advice}"</span>
           </div>
      )}

      <button onClick={() => getAdvice(setAdvice)}>ADVICE!</button>
  </>
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
