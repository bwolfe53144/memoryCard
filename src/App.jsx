import React, { useEffect, useState } from "react";
import './App.css'
const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=8";

export default function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [gameArray, setGameArray] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

function handleClick(event) {
    const nextList = [...data];
    nextList.sort(function(){return 0.5 - Math.random()});
    setData(nextList);
    gameArray[event.id] == 1 ? endGame() : continueGame(event.id);
  }



function continueGame(index) {
  const nextCounters = gameArray.map((c, i) => {
    if (i === index) {
      return c+1;
    } else {
      return c;
    }
  });
  setGameArray(nextCounters);
  setScore(score + 1);
  score >= bestScore ? setBestScore(score+1) : null;
  score == 7 ? endGame() : null;
}

function endGame() {
  score == 7 ?  alert('You got them all right!'): alert(`You already selected that card!`);
  setGameArray([0, 0, 0, 0, 0, 0, 0, 0])
  setScore(0);
}


  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true)
      const result = await fetch(pokeUrl)
      const somevar = await result.json();
      const initialData = somevar.results;
      initialData.forEach(e => {
          const fetchNewData = async() => {
            const newResult = await fetch(e.url)
            const newVar = await newResult.json();
            let newObject = {id: someId, myName: newVar.name, photo: newVar.sprites.back_default};
            setData((currentList) => [...currentList, newObject]);
            someId ++;
          }
          fetchNewData();
        })
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="title">Memory Card Game</div>
      <div className="score" >{'Score: '}{score}</div>
      <div className="score" >{'Top Score: '}{bestScore}</div>
    <ul className='myCards'>
                {data.map((dat) => (
                    <li key={dat.id}>
                      <button className="card"  onClick={e => handleClick(dat)} >
                        <span className='skillName'>{dat.myName}</span>
                        <img className="cardPhoto" src={dat.photo} alt="placeholder" />
                        </button>
                    </li>
                ))}
                </ul>
                </div>
  );
}

let someId = 0;


