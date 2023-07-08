import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Header = (props) => <h1>{props.header}</h1>;

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  const average = (clicks.good * 1 + clicks.bad * -1) / clicks.total;
  const positive = clicks.good * (100 / clicks.total);

  if (clicks.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={clicks.good} />
        <StatisticLine text={"neutral"} value={clicks.neutral} />
        <StatisticLine text={"bad"} value={clicks.bad} />
        <StatisticLine text={"all"} value={clicks.total} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"positive"} value={positive} />
      </tbody>
    </table>
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
      <Statistics clicks={clicks} />
    </div>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
