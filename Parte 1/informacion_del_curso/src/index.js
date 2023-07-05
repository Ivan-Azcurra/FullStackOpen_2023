import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  console.log(props);
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
  console.log(parte1);
  /* ---------------------------- */
  let parte2 = props.parte2;
  console.log(parte2);
  /* ---------------------------- */
  let parte3 = props.parte3;
  console.log(parte3);

  return (
    <>
      <Part parte={parte1.name} exercises={parte1.exercises} />
      <Part parte={parte2.name} exercises={parte2.exercises} />
      <Part parte={parte3.name} exercises={parte3.exercises} />
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parte1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const parte2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const parte3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content parte1={parte1} parte2={parte2} parte3={parte3} />

      <Total exercises={parte1.exercises + parte2.exercises + parte3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
