import React from 'react'
import logo from './fibo.png';

const Header =() =>{

    return(
        <div>
       
       
        <img  src={logo} className="App-logo-header" alt="logo" />
        <h1 style={{fontFamily:'Math'}}> Fibonacci sequence =  1, 1, 2, 3, 5, 8, ... </h1>

         </div>

    )

};

export default Header;