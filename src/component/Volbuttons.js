import React from 'react'
import { useDispatch } from 'react-redux';
import { increase, decrease, } from "../slices/counter/counterSlice";

const Volbuttons = () => {
    const dispatch = useDispatch();

  return (
    <div>
      <div className="Volume">
          <button className="volumes"  onClick={() => dispatch(increase())}>+</button>
          <button className="volumes" onClick={() => dispatch(decrease())}>-</button>
        </div>
    </div>
  )
}

export default Volbuttons
