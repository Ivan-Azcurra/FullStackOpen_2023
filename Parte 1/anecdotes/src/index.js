import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const MostVoted = ({ anecdotes, points }) => {
  const maxVoted = Math.max(...points);
  const positionWin = points.indexOf(maxVoted);
  const anecdoteWin = anecdotes[positionWin];

  if (maxVoted === 0) {
    return (
      <div>
        <p>No vote</p>
      </div>
    );
  }

  return (
    <div>
      <p>{anecdoteWin}</p>
      <p>has {maxVoted} votes</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  //State de votos
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0));

  const changeAnecdote = () => {
    const index = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(index);
  };

  const increaseVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    //le pasamos el nuevo array copiado de ...points, modificado
    setPoints(newPoints);
  };

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={increaseVote} text={"vote"} />
      <Button onClick={changeAnecdote} text="next anecdote" />
      <Header text={"Anecdote with most votes"} />
      <MostVoted anecdotes={props.anecdotes} points={points} />
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
