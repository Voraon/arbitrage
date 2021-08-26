import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sum, name, selectCount, minus } from '../reducer/testSlice';

function CountClock() {

     const dispatch = useDispatch();
     const count = useSelector(selectCount);

     const handleIncrement=()=>{
         dispatch(sum())
     }

    return (
        <div>
            {count} {name}
            <button onClick={handleIncrement}>addition</button>
            
            <button onClick={()=>dispatch(minus())}>subtract</button>
        </div>
    )
}

export default CountClock
