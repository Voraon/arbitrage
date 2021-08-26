import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, name, selectCount } from '../reducer/counterSlice';

function CountClock() {

     const dispatch = useDispatch();
     const count = useSelector(selectCount);
    
     const handleIncrement=()=>{
         dispatch(increment())
     }

    return (
        <div>
            {count} {name}
            <button onClick={handleIncrement}>increment</button>
        </div>
    )
}

export default CountClock
