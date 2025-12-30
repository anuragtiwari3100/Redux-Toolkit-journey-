import { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { addition,subtraction,incrementByAmount,reset} from './features/counter/counterSlice'

function App() {
  const[amount, setAmount] = useState(0);


const count = useSelector((state)=>state.counter.value)




const dispatch = useDispatch()

  function handleIncrement(){
      dispatch(addition());
  }

  function handleDecrement(){
     dispatch(subtraction());
  }


  function handleReset(){
     dispatch(reset());
  }

  function incrementByAmountHandler(){
    dispatch(incrementByAmount(amount));
  }



  return (
    <>
     <h1>Hello This is Tiwari</h1>
     <button onClick={handleIncrement}>+</button>
     <p>Count:{count}</p>
     {
      console.log(count)
     }
      
     <button onClick={handleDecrement}>-</button>

 <br /><br /><br />
        <button onClick={handleReset}>00</button>
         <br /><br /><br />


             <button onClick={incrementByAmountHandler}>inc by amount </button>
        <input type='text' value={amount} placeholder='enter amoount'  onChange={(e)=>setAmount(e.target.value)}></input>

    </>
  )
}

export default App
