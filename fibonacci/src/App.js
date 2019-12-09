import React, {useState,} from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'

function App() {
  
  const [nValue, nValueHandler] = useState("3");
  const [answer, answerHandler] = useState("2");
  
  const fiboCalculator = (n)=>{
    if (n <= 2) return 1;
    let f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    let correctAnswer = f[f.length-1];
    if (correctAnswer.toString() === answer.toString()) 
    alert('Woowow ' + correctAnswer +" is correct, genius !!! " + f.toString());
    else alert ('Sorry, that is not correct');  
    
  };
  
  const nValueOnHandleChange = e => {
    let valu = e.target.value;
    if (!Number(valu)) {
      return;
    }
    nValueHandler(e.target.value);
  };
  
  const answerOnHandleChange = e => {
    let valu = e.target.value;
    if (!Number(valu)) {
      return;
    }
    answerHandler(e.target.value);
  };
  
  return (
    
    <div className="App">
    <Header/>
    <div className="App-header">
    <h1>What is the {nValue}th. Fibonacci number? </h1>
    
    <input
    value={nValue}
    onChange={e=>nValueOnHandleChange(e)}
    type='number'
    
    ></input>
    
    <hr></hr>
    <h1>Your Answer </h1>
    
    <input
    value={answer}
    onChange={e=>answerOnHandleChange(e)}      
    type="number"
    
    ></input>
    
    <hr></hr>
    
    <button
    onClick={()=>fiboCalculator(nValue)}
    > Send
    </button>
    
    </div>
    <Footer/>
    </div>
    );
  }
  
  export default App;
  