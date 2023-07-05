import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.parte} {props.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parte1 = "Fundamentals of React";
  const exercises1 = 10;
  const parte2 = "Using props to pass data";
  const exercises2 = 7;
  const parte3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parte={parte1} exercises={exercises1} />
      <Content parte={parte2} exercises={exercises2} />
      <Content parte={parte3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
