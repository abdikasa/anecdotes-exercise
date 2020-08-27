import React, { useState } from "react";
import ReactDOM from "react-dom";

// 1.13*: anecdotes step2
// Expand your application so that you can vote for the displayed anecdote.

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVotes = () => {
    //make copy of votes
    const allVotes = [...votes];
    //update the state array variable
    allVotes[selected] += 1;
    //re-render the page with the new values.
    setVotes(allVotes);
    console.log(allVotes);
  };

  return (
    <div>
      <p>Ancedote: {selected + 1}</p>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button onClick={handleVotes} text="vote"></Button>
      <Button onClick={handleClick} text="next anecdote"></Button>
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

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
