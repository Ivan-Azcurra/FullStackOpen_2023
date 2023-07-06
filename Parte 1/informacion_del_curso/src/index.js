import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  let arrayInput = props.parts;
  return (
    <>
      <Part name={arrayInput[0].name} exercises={arrayInput[0].exercises} />
      <Part name={arrayInput[1].name} exercises={arrayInput[1].exercises} />
      <Part name={arrayInput[2].name} exercises={arrayInput[2].exercises} />
    </>
  );
};

const Total = (props) => {
  let arrayInput = props.parts;
  let total =
    arrayInput[0].exercises + arrayInput[1].exercises + arrayInput[2].exercises;
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
