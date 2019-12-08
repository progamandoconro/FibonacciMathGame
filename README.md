# FibonacciMathGame
App to mentally calculate the nth Fibonacci number.

https://progamandoconro.github.io/FibonacciMathGame/

## My simplest working example (starting point) 
```
import React, {useState,} from 'react';
import logo from './fibo.png';
import './App.css';
import ExampleComponent from 'react-rounded-image'

function App() {
  
  const [nValue, nValueHandler] = useState("3");
  const [userAnswer, userAnswerHandler] = useState("2");
  
  const fiboHandler = (n)=>{
    
    if (n <= 2) return 1;
    const f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    const correctAnswer = f[f.length-1];
    if (correctAnswer.toString() === userAnswer.toString()) 
    alert('Woowow ' + correctAnswer +" is correct, genius !!! " + f.toString());
    else alert ('Sorry, that is not correct');    
  };
  
  return (
    <div className="App">
    <div className="App-header">
    <h1>Nth. Fibonacci number</h1>
    <input
    
    value={nValue}
    onChange={e=>nValueHandler(e.target.value)}
    type='number'
    ></input>
    <hr></hr>
    
    <ExampleComponent className="App-logo" alt="logo" image={logo} />

    <h1>Your Answer </h1>
    
    <input
    value={userAnswer}
    onChange={e=>userAnswerHandler(e.target.value)}
    type="number"
    
    ></input>
    <hr></hr>
    
    <button
    onClick={()=>{
      fiboHandler(nValue)
    }
  }
  >Send</button>

  </div>
  <img style={{padding:100}} src={logo} className="App-logo" alt="logo" />
  <footer> <a href='https://github.com/progamandoconro/FibonacciMathGame'> https://github.com/progamandoconro/FibonacciMathGame</a> </footer>
  

  </div>
  );
}

export default App;


```
