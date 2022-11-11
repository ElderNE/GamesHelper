import React from 'react';
import { useState } from 'react';
import Cube from '../../components/cube';
import './style.css';

function CubeCounter({closeModal, increment, decrement, count}) {

  let arr = [];
  for(let i = 0; i < 3 ; i++)
    arr.push(Math.round(Math.random()*(6 - 1) + 1));

  const [countDice, setCountDice] = useState(arr);
  const [change, setChange] = useState(true);
  const rollTheDice = () => {
    setCountDice(arr);
    setChange(false);
    setTimeout(() => {setChange(true)}, 4000);
  }

  let list = [];
  for(let i = 0; i < count ; i++) {
    list.push(<Cube key={i} count={countDice} i={i} change={change}/>);
  }

  return (
      <section className='cubeCounter'>
        <div className='cubeCounterField'>
          <div className='counter'>
            <div>quantity</div>
            <div className='plus' onClick={increment}>+</div>
            <p className='text'>{count}</p>
            <div className='minus' onClick={decrement}>-</div>
          </div>
          <div className='coubes' onClick={rollTheDice}>
            {list}
          </div>
          <div className='cubeCounterClose' onClick={closeModal}></div>
        </div>
      </section>
  );
}

export default React.memo(CubeCounter);