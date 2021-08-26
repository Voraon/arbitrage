import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../reducer/counterSlice';

function CountClock() {

     const dispatch = useDispatch();
     const name = useSelector(state => state.name)


    return (
        <div>
            {name}
            <button onClick={()=>dispatch(increment)}>increment</button>
        </div>
    )
}

export default CountClock
