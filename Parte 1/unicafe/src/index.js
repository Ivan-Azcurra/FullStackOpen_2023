import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ text, value }) => {
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  });

  const increaseGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1, total: clicks.total + 1});
  };

  const increaseNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1, total: clicks.total + 1 });
  };

  const increaseBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1,  total: clicks.total + 1 });
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNeutral} text={"neutral"} />
      <Button onClick={increaseBad} text={"bad"} />
      <h1>statistics</h1>
      <Statistics text={"good"} value={clicks.good} />
      <Statistics text={"neutral"} value={clicks.neutral} />
      <Statistics text={"bad"} value={clicks.bad} />
      <Statistics text={"all"}  value={clicks.total}/>
      <Statistics text={"average"} value={(clicks.good * 1 + clicks.bad * -1) / clicks.total}/>
      <Statistics text={"positive"}  value={clicks.good * (100/clicks.total)}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
