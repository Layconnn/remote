import { useSelector, useDispatch } from "react-redux";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "../slices/channels/channelSlice";
import { increase, decrease } from "../slices/counter/counterSlice";
import { start } from "../slices/power/powerSlice";

const General = () => {
    const count = useSelector((state) => state.counter.count);
    const channel = useSelector((state) => state.channels.channel);
    const power = useSelector((state) => state.shazam.power);
    const dispatch = useDispatch();


  return (
    <div>
      <div className="everything">
        <div className="lists">
          <p>Power: {power}</p>
          <p>Channel: {channel}</p>
          <p>Volume: {count}</p>
        </div>
        <div className="Vol">
          <button className="on" onClick={() => dispatch(start())}>ON</button>
        </div>
        <div className="buttons">
          <button className="omoooo" onClick={() => dispatch(One())}>1</button>
          <button className="omoooo" onClick={() => dispatch(Two())}>2</button>
          <button className="omoooo" onClick={() => dispatch(Three())}>3</button>
          <button className="omoooo" onClick={() => dispatch(Four())}>4</button>
          <button className="omoooo" onClick={() => dispatch(Five())}>5</button>
          <button className="omoooo" onClick={() => dispatch(Six())}>6</button>
          <button className="omoooo" onClick={() => dispatch(Seven())}>7</button>
          <button className="omoooo" onClick={() => dispatch(Eight())}>8</button>
          <button className="omoooo" onClick={() => dispatch(Nine())}>9</button>
          <button className="omoooo" onClick={() => dispatch(Ten())}>0</button>
        </div>
        <p className="lists">Vol</p>
        <div className="Volume">
          <button className="Jinadu"  onClick={() => dispatch(increase())}>+</button>
          <button className="Jinadu" onClick={() => dispatch(decrease())}>-</button>
        </div>
      </div>
    </div>
  )
}

export default General;
