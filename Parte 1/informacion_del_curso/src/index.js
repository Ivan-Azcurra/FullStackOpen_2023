import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
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
  let objectInput = props.course;
  return (
    <>
      <Part name={objectInput.parts[0].name} exercises={objectInput.parts[0].exercises} />
      <Part name={objectInput.parts[1].name} exercises={objectInput.parts[1].exercises} />
      <Part name={objectInput.parts[2].name} exercises={objectInput.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  let objectInput = props.course;
  let total =
    objectInput.parts[0].exercises + objectInput.parts[1].exercises + objectInput.parts[2].exercises;
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
