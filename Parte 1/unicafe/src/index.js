import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;


const Statistics = ({text, value}) => {
  return (
    <>
      <p>{text}  {value}</p> 
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNeutral} text={"neutral"} />
      <Button onClick={increaseBad} text={"bad"} />
      <h1>statistics</h1>
      <Statistics text={"good"} value={good}/>
      <Statistics text={"neutral"} value={neutral}/>
      <Statistics text={"bad"} value={bad}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
