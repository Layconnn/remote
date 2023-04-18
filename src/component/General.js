import { useSelector, useDispatch } from "react-redux";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "../slices/channels/channelSlice";
import { increase, decrease, constant } from "../slices/counter/counterSlice";
import { start, stop } from "../slices/power/powerSlice";




const General = () => {
    const count = useSelector((state) => state.counter.count);
    const channel = useSelector((state) => state.channels.channel);
    const power = useSelector((state) => state.shazam.power);
    const dispatch = useDispatch();

    const handleClick = () => {
      if ( power === 'off' ){
        dispatch(start()) 
      } else if ( power === 'on' ){
        dispatch(stop())
        dispatch(Ten(null))
        dispatch(constant(null))
      }
    }

    const longRun = () => {
      if ( power === 'on' ){
        dispatch(One())
      } 
        return (null);
    }
    const Second = () => {
      if ( power === 'on' ){
        dispatch(Two())
      } 
        return (null);
    }
    const Third = () => {
      if ( power === 'on' ){
        dispatch(Three())
      } 
        return (null);
    }
    const Fourth = () => {
      if ( power === 'on' ){
        dispatch(Four())
      } 
        return (null);
    }
    const Fifth = () => {
      if ( power === 'on' ){
        dispatch(Five())
      } 
        return (null);
    }
    const Sixth = () => {
      if ( power === 'on' ){
        dispatch(Six())
      } 
        return (null);
    }
    const Seventh = () => {
      if ( power === 'on' ){
        dispatch(Seven())
      } 
        return (null);
    }
    const Eighth = () => {
      if ( power === 'on' ){
        dispatch(Eight())
      } 
        return (null);
    }
    const Ninth = () => {
      if ( power === 'on' ){
        dispatch(Nine())
      } 
        return (null);
    }
    const Tenth = () => {
      if ( power === 'on' ){
        dispatch(Ten())
      } 
        return (null);
    }

    const volUp = () => {
      if ( power === 'on' ){
        dispatch(increase())
      }
      return (null);
    }
    const volDown = () => {
      if ( power === 'on' ){
        dispatch(decrease())
      }
      return (null);
    }

  return (
    <div>
      <div className="everything">
        <div className="lists">
          <p>Power: {power}</p>
          <p>Channel: {channel}</p>
          <p>Volume: {count}</p>
        </div>
        <div className="Vol">
          <button className="on" onClick={handleClick}>Power</button>
        </div>
        <div className="buttons">
          <button className="omoooo" onClick={longRun}>1</button>
          <button className="omoooo" onClick={Second}>2</button>
          <button className="omoooo" onClick={Third}>3</button>
          <button className="omoooo" onClick={Fourth}>4</button>
          <button className="omoooo" onClick={Fifth}>5</button>
          <button className="omoooo" onClick={Sixth}>6</button>
          <button className="omoooo" onClick={Seventh}>7</button>
          <button className="omoooo" onClick={Eighth}>8</button>
          <button className="omoooo" onClick={Ninth}>9</button>
          <button className="omoooo" onClick={Tenth}>0</button>
        </div>
        <p className="lists">Vol</p>
        <div className="Volume">
          <button className="Jinadu"  onClick={volUp}>+</button>
          <button className="Jinadu" onClick={volDown}>-</button>
        </div>
      </div>
    </div>
  )
}

export default General;
