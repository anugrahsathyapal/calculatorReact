import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

    const displayContent = (content) => {
        setDisplay(display + content)
    }
    const calcRemoveLast = () => {
      setDisplay(display.slice(0, -1))
   }
   const calOutput = ()=>{
    setDisplay(eval(display))
   }
   const calcScreenClear = ()=>{
     setDisplay('')
   }
   
    return (
        <>
            <div className="calculator ">
                <input style={{backgroundColor:"black",color:"white",height:"80px"}} type="text" value={display}  id="result"  />
                <div className="">
                    <button onClick={() => displayContent('7')} className="btn ">7</button>
                    <button onClick={() => displayContent('8')} className="btn ">8</button>
                    <button onClick={() => displayContent('9')} className="btn ">9</button>
                    <button onClick={() => displayContent('*')} className="btn ">*</button>
                </div>
                <div className="">
                    <button onClick={() => displayContent('4')} className="btn ">4</button>
                    <button onClick={() => displayContent('5')} className="btn ">5</button>
                    <button onClick={() => displayContent('6')} className="btn ">6</button>
                    <button onClick={() => displayContent('-')} className="btn ">−</button>
                </div>
                <div className="">
                    <button onClick={() => displayContent('1')} className="btn ">1</button>
                    <button onClick={() => displayContent('2')} className="btn ">2</button>
                    <button onClick={() => displayContent('3')} className="btn ">3</button>
                    <button onClick={() => displayContent('+')} className="btn">+</button>
                </div>
                <div className="">
                    <button onClick={calcRemoveLast} className="btn ">DEL</button>
                    <button onClick={() => displayContent('0')} className="btn ">0</button>
                    <button onClick={() => displayContent('/')} className="btn ">/</button>
                    <button onClick={() => displayContent('.')} className="btn ">.</button>
                 
                </div>
                <button style={{width: '33%'}} onClick={calcScreenClear} className="btn">AC</button>
                <button style={{width:'60%'}} onClick={calOutput} className="btn ">=</button>
                
            </div>
        </>
    );
}

export default App;
