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
    className='field'
    value={answer}
    onChange={e=>answerOnHandleChange(e)}      
    
    min='2'
    
    ></input>
    
    <h1>Your Answer </h1>
    
    <button
    className='button'
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