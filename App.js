import './App.css';
import { useState } from 'react';

export default function App() {
    const [counter,setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter+1);
    }
    function decreaseCounter() {
        setCounter(counter-1);
    }
    function resetCounter() {
        setCounter(0);
    }
    return <>
            <h1 className="title">Counter</h1>
            <div id="number">
            {counter}
            </div>
            <div>
            <button id="up" onClick={increaseCounter}>Increase</button>
            <button id="down" onClick={decreaseCounter}>Decrease</button>
            <button id="reset" onClick={resetCounter}>Reset</button>
            </div>
        </>
}