import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Decrement, Increment, Reset } from './Redux/Action/Action';

function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={()=>dispatch(Increment())}>Add</button>
      <button onClick={()=>dispatch(Decrement())}>Substract</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  );
}

export default App;
