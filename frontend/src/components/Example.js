import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Counter.module.css';

import { increment,decrement, selectCount, incrementByAmount } from '../reducer/counterSlice';
import persistor from '../createStore/store'

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  console.log("persistor.persist();",persistor);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
