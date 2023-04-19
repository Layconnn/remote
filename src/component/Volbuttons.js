import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from "../store/slices/counter/counterSlice";

const Volbuttons = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleClick = () => {
        if ( count >= 0 && count <= 99 ){
            dispatch(increase())
        } 
    }

    const handleUnClick = () => {
        if ( count <= 100 && count >= 1 ){
            dispatch(decrease())
        }
    }

  return (
    <div>
      <div className="Volume">
          <button className="volumes"  onClick={handleClick}>+</button>
          <button className="volumes" onClick={handleUnClick}>-</button>
        </div>
    </div>
  )
}

export default Volbuttons
