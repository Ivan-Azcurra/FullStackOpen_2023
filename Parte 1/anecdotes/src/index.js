import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [ponits, setPoints] = useState(Array(props.anecdotes.length).fill(0));

  const changeAnecdote = () => {
    const index = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(index);
    console.log(index);
  };

  const increaseVote = () => {
    const newPoints = [...ponits];
    newPoints[selected] += 1;
    //le pasamos el nuevo array copiado de ...points, modificado
    setPoints(newPoints);
    console.log(ponits[selected]);
  };

  return (
    <div>
      {props.anecdotes[selected]}
      <br />
      has {ponits[selected]} votes
      <br />
      <Button onClick={increaseVote} text={"vote"} />
      <Button onClick={changeAnecdote} text="next anecdote" />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App anecdotes={anecdotes} />);
