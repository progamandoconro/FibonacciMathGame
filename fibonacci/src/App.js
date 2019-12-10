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

    <button
    onClick={()=>fiboCalculator(nValue)}
    > Send
    </button>
    </div>

    <h1> Your Fibonacci Points </h1>

    <table
      className='Table'
    > {showTable(nValue)} 
       <button style={{backgroundColor:'black',color:'white', border:'black',fontSize:20}}> Save </button>

    </table>
    
    <Footer/>
    </div>
    
    );
  }
  
  export default App;