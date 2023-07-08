import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.header}</h1>;

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ clicks }) => {
  if (clicks.total === 0) {
    return (
    <div>
      <p>No feedback given</p>;
    </div>
    )
  } 
    
  return (
      <>
        <StatisticLine text={"good"} value={clicks.good} />
        <StatisticLine text={"neutral"} value={clicks.neutral} />
        <StatisticLine text={"bad"} value={clicks.bad} />
        <StatisticLine text={"all"} value={clicks.total} />
        <StatisticLine
          text={"average"}
          value={(clicks.good * 1 + clicks.bad * -1) / clicks.total}
        />
        <StatisticLine
          text={"positive"}
          value={clicks.good * (100 / clicks.total)}
        />
      </>
    );
  
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const increaseGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1, total: clicks.total + 1 });
  };

  const increaseNeutral = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
      total: clicks.total + 1,
    });
  };

  const increaseBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1, total: clicks.total + 1 });
  };

  return (
    <div>
      <Header header="give feedback" />
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNeutral} text={"neutral"} />
      <Button onClick={increaseBad} text={"bad"} />
      <Header header="statistics" />
      <Statistics clicks={clicks}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
