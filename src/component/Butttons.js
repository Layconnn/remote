import React from 'react'
import { useDispatch } from 'react-redux';
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "../store/slices/channels/channelSlice";

const Butttons = () => {
    const dispatch = useDispatch();

  return (
    <div>
      <div className="buttons">
          <button className="channel-buttons" onClick={() => dispatch(One())}>1</button>
          <button className="channel-buttons" onClick={() =>dispatch(Two())}>2</button>
          <button className="channel-buttons" onClick={() => dispatch(Three())}>3</button>
          <button className="channel-buttons" onClick={() => dispatch(Four())}>4</button>
          <button className="channel-buttons" onClick={() => dispatch(Five())}>5</button>
          <button className="channel-buttons" onClick={() => dispatch(Six())}>6</button>
          <button className="channel-buttons" onClick={() => dispatch(Seven())}>7</button>
          <button className="channel-buttons" onClick={() => dispatch(Eight())}>8</button>
          <button className="channel-buttons" onClick={() => dispatch(Nine())}>9</button>
          <button className="channel-buttons" onClick={() => dispatch(Ten())}>0</button>
        </div>
    </div>
  )
}

export default Butttons
