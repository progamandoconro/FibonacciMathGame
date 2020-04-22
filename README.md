# FibonacciMathGame
App to mentally calculate the nth Fibonacci number.

https://programandoconro.github.io/FibonacciMathGame/

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
# Now with more complexity and less bugs

```

import React, {useState,} from 'react';
import {Button,Table,TableCell} from '@material-ui/core';

import Header from './Header'
import Footer from './Footer'

import './App.css';

function App() {
  
  const [nValue, setnValue] = useState("3");
  const [answer, setAnswer] = useState("2");
  
  const fiboCalculator = (n)=>{
    if (n <= 2) return 1;
    let f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    let correctAnswer = f[f.length-1];
    
    if (correctAnswer.toString() === answer.toString()) {
      alert('Woowow ' + correctAnswer +" is correct, genius !!! " + f.toString() + " A new level is now available");
      
    }
    else alert ('Sorry, that is not correct');  
    
  };
  
  const gameLevelHandler = (n)=> {
    
    if (n <= 2) return 1;
    let f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    let correctAnswer = f[f.length-1];
    let counter = 1
    
    if (correctAnswer.toString() === answer.toString()) {
      let val = parseInt( nValue)  + parseInt( counter)
      return val;
    }
    else {
      return parseInt(nValue)
    }
  }
  
  const nValueOnHandleChange = e => {
    let valu = e.target.value;
    if (!Number(valu)) {
      return;
    }
    setnValue(e.target.value);
  };
  
  const answerOnHandleChange = e => {
    let valu = e.target.value;
    if (!Number(valu)) {
      return;
    }
    setAnswer(e.target.value);
  };
  
  const showTable = (n)=> {
    if (n <= 2) return 1;
    let f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    return f.slice(1,f.length-2).map(e=><li>{e.toString()}</li>)
  }
  
  return (
    
    <div className="App">
    <Header/>
    <div className="App-body">
    <h1> Level </h1>
    <input
    value={nValue}
    onChange={e=>nValueOnHandleChange(e)}
    type='number'
    min='3'
    max={gameLevelHandler(nValue)}
    
    ></input>

<h1>What is the {nValue}th. Fibonacci number? </h1>
 
    <input
    value={answer}
    onChange={e=>answerOnHandleChange(e)}      
    type="number"
    min='2'
    
    ></input>
    
    <h1>Your Answer </h1>

    <Button
    style={{color:'white'}}
    onClick={()=>fiboCalculator(nValue)}
    > Send
    </Button>
    </div>

    <h1> Your Fibonacci Points </h1>

    <Table >
    <TableCell 
    className='Table'
    > {showTable(nValue)} 
    </TableCell>
    </Table>
    <Footer/>
    </div>
    
    );
  }
  
  export default App;
  
```

# Simple is beautiful, lets remove input and update the level if answer is correct automatically. 

``` 
import React, {useState,} from 'react';

import Header from './Header'
import Footer from './Footer'

import './App.css';

function App() {
  
  const [nValue, setnValue] = useState("3");
  const [answer, setAnswer] = useState("2");
  
  const fiboCalculator = (n)=>{
    if (n <= 2) return 1;
    let f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    let correctAnswer = f[f.length-1];
    
    if (correctAnswer.toString() === answer.toString()) {
      alert('Woowow ' + correctAnswer +" is correct, genius !!! " + f.toString() + " A new level is now available");
      setnValue(parseInt(nValue)+1);
    }
    else alert ('Sorry, that is not correct');  
    
  };
  
  const answerOnHandleChange = e => {
    let valu = e.target.value;
    if (!Number(valu)) {
      return;
    }
    setAnswer(e.target.value);
  };
  
  const showTable = (n)=> {
    if (n <= 2) return 1;
    let f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    return f.slice(1,f.length-2).map(e=><li>{e.toString()}</li>)
  };

  return (
    
    <div className="App">
    <Header/>
    <div className="App-body">
    
    <h1>What is the {nValue}th. Fibonacci number? </h1>
    
    <input
    value={answer}
    onChange={e=>answerOnHandleChange(e)}      
    type="number"
    min='2'
    
    ></input>
    
    <h1>Your Answer </h1>
    
    <button
    onClick={()=>fiboCalculator(nValue)}
    > Send
    </button>
    </div>
    <h1> Your Fibonacci Points </h1>
    <table
    className='Table'
    > {showTable(nValue)} 
    </table>
    
    <Footer/>
    </div>
    
    );
  }
  
  export default App;

  ```

  
