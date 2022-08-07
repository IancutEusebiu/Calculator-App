import {useState} from 'react'


function App(){
 const [calc, setCalc] = useState("");
 const [result, setRes] = useState("");

 const op = ['+','-','*','/'];

const updateCalcul = value=>{
  if((op.includes(value) && calc === '' )|| (op.includes(value) && op.includes(calc.slice(-1)))){
    return;
  }
  if(!op.includes(value)){
    setRes(eval(calc+ value).toString());
  }
  setCalc(calc+value);
}

const calculate=() =>{
  setCalc(eval(calc).toString());
}

const deleteLast =()=>{
  if(calc === ''){
    return;
  }
  const value= calc.slice(0,-1)
  setCalc(value);
  setRes(0);
}

 const createNumber=() =>{
  const number=[];
  for(let i =1;i<10;i++){
    number.push(
      <button onClick={()=>updateCalcul(i.toString())} key={i}>{i}</button>
    )
  }
  return number;
 }

  return(
    <div className="App">
      <div className="calculator">
        <div className="display">
        {result ?  <span>({result})</span>: ''} {calc || 0}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalcul('+')}>+</button>
          <button onClick={()=>updateCalcul('-')}>-</button>
          <button onClick={()=>updateCalcul('*')}>*</button>
          <button onClick={()=>updateCalcul('/')}>/</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="number">
          {createNumber()}
          <button onClick={()=>updateCalcul('0')}>0</button>
          <button onClick={()=>updateCalcul('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
 
export default App;
