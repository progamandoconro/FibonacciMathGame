import React, {useState,} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [nValue, nValueHandler] = useState("3");
  const [userAnswer, userAnswerHandler] = useState("2");
  
  const clickHandler = (e) =>{
    
    console.log(e);
    console.log(userAnswer);
    console.log(fiboHandler);
  };
  
  const fiboHandler = (n)=>{
    
    if (n <= 2) return 1;
    
    const f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    const correctAnswer = f[f.length-1]
    alert(f.toString())
    console.log( correctAnswer.toString());
    if (correctAnswer.toString() === userAnswer.toString()) alert('Woowow ' + correctAnswer +" genius !!! ")
    else alert ('Sorry, that is not correct')
    
  };
  
  return (
    <div className="App">
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Nth Fibonacci number</h1>
    <input
    
    value={nValue}
    onChange={e=>nValueHandler(e.target.value)}
    type='number'
    ></input>
    <hr></hr>
    <h1>Your Answer </h1>
    
    <input
    value={userAnswer}
    onChange={e=>userAnswerHandler(e.target.value)}
    type="number"
    
    ></input>
    <hr></hr>
    
    <button
    onClick={()=>{
      clickHandler(nValue)
      fiboHandler(nValue)
    }
  }
  >Send</button>
  </div>
  <div>
  </div>
  </div>
  );
}

export default App;
