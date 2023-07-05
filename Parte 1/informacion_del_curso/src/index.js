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
        {props.parte} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  let parte1 = props.parte1;
  let exercises1 = props.exercises1;
  /* ---------------------------- */
  let parte2 = props.parte2;
  let exercises2 = props.exercises2;
  /* ---------------------------- */
  let parte3 = props.parte3;
  let exercises3 = props.exercises3;

  return (
    <>
      <Part parte={parte1} exercises={exercises1} />
      <Part parte={parte2} exercises={exercises2} />
      <Part parte={parte3} exercises={exercises3} />
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
      <Content
        parte1={parte1}
        exercises1={exercises1}
        parte2={parte2}
        exercises2={exercises2}
        parte3={parte3}
        exercises3={exercises3}
      />

      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
