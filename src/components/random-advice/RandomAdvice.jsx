import { useEffect, useState } from "react";

const RandomAdvice = () => {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    getAdvice(setAdvice);
  }, []);
  return (
    <>
      <h2 key={advice.id}>{advice.id}</h2>
      <span>"{advice.advice}"</span>
      <button onClick={() => getAdvice(setAdvice)}>ADVICE!</button>
    </>
  );
};

const getAdvice = async setAdvice => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log(advice);
    setAdvice(advice);
  } catch (error) {
    console.error("chao no hay nada");
  }
};

export default RandomAdvice;
